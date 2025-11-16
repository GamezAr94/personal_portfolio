// app/api/chat/route.ts
import { NextResponse } from 'next/server';

// Esta función simula una espera, como si la IA estuviera "pensando"
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Recibimos la pregunta del usuario (content) y nuestra seguridad
        const { content, honeypot, token } = body;

        // --- 1. Validación del Honeypot (REUTILIZADA) ---
        if (honeypot) {
            console.log('Bot de chat detectado por honeypot.');
            return NextResponse.json({ success: true, message: 'OK' });
        }

        // --- 2. Validación de reCaptcha v3 (REUTILIZADA) ---
        if (!token) {
            return NextResponse.json(
                { error: 'reCaptcha token is missing.' },
                { status: 400 },
            );
        }

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: 'POST',
            },
        );
        const recaptchaData = await recaptchaResponse.json();
        console.log(recaptchaData.score);
        if (!recaptchaData.success || recaptchaData.score < 0.8) {
            console.warn(
                'Chat reCaptcha verification failed. Score:',
                recaptchaData.score,
            );
            return NextResponse.json(
                { error: 'reCaptcha verification failed.' },
                { status: 403 },
            );
        }

        // --- RESPUESTA "FALSA" (MOCK) ---
        // ¡Validaciones pasadas! Ahora simulamos la respuesta de la IA.

        await sleep(1500); // Esperamos 1.5 segundos

        const mockResponse = `Esta es mi respuesta de prueba (desde la API) a tu pregunta: "${content}"`;

        return NextResponse.json({ success: true, message: mockResponse });
    } catch (error) {
        console.error('Error in chat API:', error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json(
            { error: 'Unknown server error' },
            { status: 500 },
        );
    }
}
