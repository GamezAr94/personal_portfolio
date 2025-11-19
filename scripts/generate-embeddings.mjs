// NOTE: we have to run this command in terminal every time we change the lib/rag-content.json file
// so that we will have our chat brain up to date
// node scripts/generate-embeddings.mjs

// import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { promises as fs } from 'fs';
import path from 'path';

// --- Configuration ---
// Make sure to add GEMINI_API_KEY to your .env file
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not set in your .env file');
}

// File paths
const INPUT_FILE = path.join(process.cwd(), 'lib/rag-content.json');
const OUTPUT_FILE = path.join(process.cwd(), 'lib/embeddings.json');
// ---------------------

/**
 * Simple utility function to calculate dot product
 */
function dotProduct(vecA, vecB) {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
        product += vecA[i] * vecB[i];
    }
    return product;
}

/**
 * Simple utility function to calculate vector magnitude
 */
function magnitude(vec) {
    let sumOfSquares = 0;
    for (let i = 0; i < vec.length; i++) {
        sumOfSquares += vec[i] * vec[i];
    }
    return Math.sqrt(sumOfSquares);
}

/**
 * Calculates the cosine similarity between two vectors.
 */
function cosineSimilarity(vecA, vecB) {
    return dotProduct(vecA, vecB) / (magnitude(vecA) * magnitude(vecB));
}

/**
 * The main function to generate and save embeddings
 */
async function generateEmbeddings() {
    console.log('--- Starting Embedding Generation ---');

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });

    // 1. Read the structured RAG content
    let rawContent;
    try {
        rawContent = await fs.readFile(INPUT_FILE, 'utf-8');
    } catch (e) {
        console.error(`Error reading input file: ${INPUT_FILE}`);
        console.error(
            "Please make sure 'lib/rag-content.json' exists and has content.",
        );
        return;
    }

    const content = JSON.parse(rawContent);

    // 2. Flatten the content into individual text chunks
    const chunks = [];
    for (const [key, texts] of Object.entries(content)) {
        for (const text of texts) {
            chunks.push({
                source: key, // e.g., "aboutMe", "projects_fazume"
                content: text,
            });
        }
    }

    console.log(`Found ${chunks.length} total text chunks to embed.`);

    // 3. Generate embeddings for each chunk
    const embeddings = [];
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

    // 4. Save the final array to the output file
    try {
        await fs.writeFile(OUTPUT_FILE, JSON.stringify(embeddings, null, 2));
        console.log(`Embeddings saved successfully to: ${OUTPUT_FILE}`);
    } catch (e) {
        console.error(`Error writing output file: ${OUTPUT_FILE}`);
        console.error(e);
    }

    // 5. (Self-test) Let's test it!
    console.log('--- Running Self-Test ---');
    if (embeddings.length < 2) {
        console.log(
            'Not enough embeddings to run a similarity test. Skipping.',
        );
        return;
    }

    // Compare the first chunk ("aboutMe") to the last chunk (e.g., "projects_homelab")
    const firstEmbedding = embeddings[0].embedding;
    const lastEmbedding = embeddings[embeddings.length - 1].embedding;

    // Let's also embed a test query
    const testQuery = 'Tell me about your server';
    const queryEmbedding = (await model.embedContent(testQuery)).embedding
        .values;

    const simToFirst = cosineSimilarity(queryEmbedding, firstEmbedding);
    const simToLast = cosineSimilarity(queryEmbedding, lastEmbedding);

    console.log(`Test Query: "${testQuery}"`);
    console.log(`Similarity to "aboutMe": ${simToFirst.toFixed(4)}`);
    console.log(`Similarity to "projects_homelab": ${simToLast.toFixed(4)}`);
    console.log('--- Embedding Generation Complete ---');
}

// Run the function
generateEmbeddings();
