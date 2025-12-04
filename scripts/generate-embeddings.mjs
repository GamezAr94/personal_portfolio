// to create the embeddings we need to rung this script in the terminal:
// node --env-file=.env scripts/generate-embeddings.mjs

// scripts/generate-embeddings.mjs
import { GoogleGenerativeAI } from "@google/generative-ai";
import { promises as fs } from "fs";
import path from "path";

// --- Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in your .env file");
}

const INPUT_FILE = path.join(process.cwd(), "lib/rag-content.json");
const OUTPUT_FILE = path.join(process.cwd(), "lib/embeddings.json");
// ---------------------

function dotProduct(vecA, vecB) {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
        product += vecA[i] * vecB[i];
    }
    return product;
}

function magnitude(vec) {
    let sumOfSquares = 0;
    for (let i = 0; i < vec.length; i++) {
        sumOfSquares += vec[i] * vec[i];
    }
    return Math.sqrt(sumOfSquares);
}

function cosineSimilarity(vecA, vecB) {
    return dotProduct(vecA, vecB) / (magnitude(vecA) * magnitude(vecB));
}

/**
 * Recursively extracts text chunks from a nested JSON object.
 * This handles both arrays ["text", "text"] and nested objects { key: [...] }
 */
function extractChunks(data, parentKey = "") {
    const chunks = [];

    for (const [key, value] of Object.entries(data)) {
        // Create a source key like "meta_identity.who_is_arturo"
        const currentKey = parentKey ? `${parentKey}.${key}` : key;

        if (Array.isArray(value)) {
            // It's an array of strings (our text chunks)
            for (const text of value) {
                chunks.push({
                    source: currentKey,
                    content: text,
                });
            }
        } else if (typeof value === "object" && value !== null) {
            // It's a nested object (like meta_identity), recurse deeper
            chunks.push(...extractChunks(value, currentKey));
        }
    }

    return chunks;
}

async function generateEmbeddings() {
    console.log("--- Starting Embedding Generation ---");

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

    // 1. Read the structured RAG content
    let rawContent;
    try {
        rawContent = await fs.readFile(INPUT_FILE, "utf-8");
    } catch (e) {
        console.error(`Error reading input file: ${INPUT_FILE}`);
        console.error(
            "Please make sure 'lib/rag-content.json' exists and has content.",
        );
        return;
    }

    const content = JSON.parse(rawContent);

    // 2. Flatten the content (Updated to handle nested objects!)
    const chunks = extractChunks(content);

    console.log(`Found ${chunks.length} total text chunks to embed.`);

    // 3. Generate embeddings for each chunk
    const embeddings = [];
    // We'll batch them slightly just to be safe/clean, though not strictly necessary for small files
    for (const chunk of chunks) {
        try {
            const result = await model.embedContent(chunk.content);
            embeddings.push({
                source: chunk.source,
                content: chunk.content,
                embedding: result.embedding.values,
            });
        } catch (e) {
            console.error(
                `Error embedding content: "${chunk.content.substring(
                    0,
                    20,
                )}..."`,
            );
            console.error(e);
        }
    }

    console.log(`Successfully generated ${embeddings.length} embeddings.`);

    // 4. Save the final array
    try {
        await fs.writeFile(OUTPUT_FILE, JSON.stringify(embeddings, null, 2));
        console.log(`Embeddings saved successfully to: ${OUTPUT_FILE}`);
    } catch (e) {
        console.error(`Error writing output file: ${OUTPUT_FILE}`);
        console.error(e);
    }

    // 5. Self-Test
    console.log("--- Running Self-Test ---");
    if (embeddings.length < 2) {
        console.log(
            "Not enough embeddings to run a similarity test. Skipping.",
        );
        return;
    }

    // Compare the first chunk to the last chunk
    const firstEmbedding = embeddings[0].embedding;
    const lastEmbedding = embeddings[embeddings.length - 1].embedding;

    const testQuery = "Tell me about your server";
    const queryEmbedding = (await model.embedContent(testQuery)).embedding
        .values;

    const simToFirst = cosineSimilarity(queryEmbedding, firstEmbedding);
    const simToLast = cosineSimilarity(queryEmbedding, lastEmbedding);

    console.log(`Test Query: "${testQuery}"`);
    console.log(
        `Similarity to first chunk (${
            embeddings[0].source
        }): ${simToFirst.toFixed(4)}`,
    );
    console.log(
        `Similarity to last chunk (${
            embeddings[embeddings.length - 1].source
        }): ${simToLast.toFixed(4)}`,
    );
    console.log("--- Embedding Generation Complete ---");
}

generateEmbeddings();
