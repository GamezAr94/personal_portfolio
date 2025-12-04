// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Import our new embeddings file ---
// We can import the JSON file directly
import embeddings from "@/lib/embeddings.json";

// If a match isn't at least this similar, we won't send it to the LLM.
// Start with 0.25 and adjust based on your logs.
const MIN_SIMILARITY_SCORE = 0.35;

// --- Simple RAG/Vector Search Utilities ---
// (We put these here to keep the file self-contained)

/**
 * Calculates the dot product of two vectors.
 */
function dotProduct(vecA: number[], vecB: number[]): number {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
        product += vecA[i] * vecB[i];
    }
    return product;
}

/**
 * Calculates the magnitude (length) of a vector.
 */
function magnitude(vec: number[]): number {
    let sumOfSquares = 0;
    for (let i = 0; i < vec.length; i++) {
        sumOfSquares += vec[i] * vec[i];
    }
    return Math.sqrt(sumOfSquares);
}

/**
 * Calculates the cosine similarity between two vectors.
 * This score tells us how "similar" two embeddings are.
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
    // Handle potential zero-magnitude vectors to avoid division by zero
    const magA = magnitude(vecA);
    const magB = magnitude(vecB);
    if (magA === 0 || magB === 0) {
        return 0;
    }
    return dotProduct(vecA, vecB) / (magA * magB);
}

// --- End of RAG Utilities ---

// --- Initialize Gemini ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in your .env file");
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// We need two models: one for embedding, one for chatting
const embeddingModel = genAI.getGenerativeModel({
    model: "text-embedding-004",
});
const chatModel = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});
// -------------------------

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { content, honeypot, token } = body;

        // --- 1. Security: Honeypot (REUSED) ---
        if (honeypot) {
            console.log("Bot de chat detectado por honeypot.");
            return NextResponse.json({ success: true, message: "OK" });
        }

        // --- 2. Security: reCaptcha v3 (REUSED) ---
        if (!token) {
            return NextResponse.json(
                { error: "reCaptcha token is missing." },
                { status: 400 },
            );
        }

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: "POST",
            },
        );
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success || recaptchaData.score < 0.8) {
            console.warn(
                "Chat reCaptcha verification failed. Score:",
                recaptchaData.score,
            );
            return NextResponse.json(
                { error: "reCaptcha verification failed." },
                { status: 403 },
            );
        }

        // --- 3. RAG: Embed the User's Query ---
        console.log(`Embedding user query: "${content}"`);
        const userEmbeddingResult = await embeddingModel.embedContent(content);
        const userEmbedding = userEmbeddingResult.embedding.values;

        // --- 4. RAG: Find Relevant Context (Retrieval) ---
        console.log("Finding relevant context...");

        // Calculate similarity scores for all chunks
        const similarities = embeddings.map((entry) => {
            const sim = cosineSimilarity(
                userEmbedding,
                (entry as any).embedding, // Cast to any to access 'embedding'
            );
            return {
                score: sim,
                source: (entry as any).source,
                content: (entry as any).content,
            };
        });

        // Sort by highest similarity and take the top 3
        similarities.sort((a, b) => b.score - a.score);

        const topMatch = similarities[0]; // The single best match

        console.log(
            `Query: "${content}" | Top Score: ${topMatch.score.toFixed(4)}`,
        );

        if (topMatch.score < MIN_SIMILARITY_SCORE) {
            console.log("Score too low. Skipping Chat API.");
            // Return a hardcoded response immediately
            return NextResponse.json({
                success: true,
                message:
                    "I'm sorry, I can only answer questions about Arturo's professional background, projects, and skills. Please try asking something specific about his work!",
            });
        }

        const topContext = similarities.slice(0, 3);

        console.log(
            "Top 3 relevant chunks:",
            topContext.map((c) => ({ source: c.source, score: c.score })),
        );

        // --- 5. RAG: Generate the Answer (Generation) ---

        // This is our new, lean, single-call prompt
        const prompt = `
      You are Arturo's personal portfolio assistant.
      You are helpful, professional, but warm and friendly.
      You answer concisely but with descriptive detail when needed.

      **Style Guidelines:**
      - keep your answers short and friendly, try to give the most relevant information to the user only wihtout generating too much text

      Using ONLY the following context, answer the user's question.
      Do not make up any information.
      **Please respond in the same language as the user's question (EN, ES or FR).**

      Context:
      ${topContext.map((c) => `- ${c.content}`).join("\n")}

      User Question:
      ${content}

      Answer:
    `;
        /*
        **Style Guidelines:**
        - Use Markdown formatting (bolding, bullet points) to make long answers easier to read.
        - If the answer covers multiple topics (like Bio + Hobbies + Experience), break them into separate paragraphs or lists.
        - Keep the tone "minimalist" in structure but "maximalist" in content depth.
        */

        console.log("Generating AI response...");
        const result = await chatModel.generateContent(prompt);
        const aiResponse = result.response.text();

        return NextResponse.json({ success: true, message: aiResponse });
    } catch (error) {
        console.error("Error in chat API:", error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json(
            { error: "Unknown server error" },
            { status: 500 },
        );
    }
}
