import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Hacemos destructuring de los datos que enviaste desde el Footer
        const { name, email, message, honeypot, token } = body;

        // --- 1. Validación del Honeypot ---
        if (honeypot) {
            console.log('Bot detectado por honeypot.');
            // Respondemos 200 OK para engañar al bot
            return NextResponse.json({
                success: true,
                message: 'Message sent successfully.',
            });
        }

        // --- 2. Validación de reCaptcha v3 ---
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

        if (!recaptchaData.success || recaptchaData.score < 0.8) {
            console.warn(
                'reCaptcha verification failed. Score:',
                recaptchaData.score,
            );
            return NextResponse.json(
                { error: 'reCaptcha verification failed.' },
                { status: 403 },
            );
        }

        // --- 3. Configuración de Nodemailer (Email) ---
        // ¡Validación pasada! Ahora sí, enviamos el email.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true para puerto 465
            auth: {
                user: process.env.SMTP_USER, // tu email de Hostinger
                pass: process.env.SMTP_PASS, // tu contraseña
            },
        });

        // Opciones del email
        const mailOptions = {
            from: `"Mi Portfolio" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Te lo envías a ti mismo
            replyTo: email, // Para que puedas darle "Responder"
            subject: `Nuevo mensaje del portfolio de: ${name}`,
            html: `
                <h2>Nuevo Contacto desde tu Portfolio</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr>
                <p><strong>Mensaje:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        };

        // --- 4. Enviar el Email ---
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully.',
        });
    } catch (error) {
        console.error('Error in contact API:', error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json(
            { error: 'Unknown server error' },
            { status: 500 },
        );
    }
}
