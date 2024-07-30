"use server";

import nodemailer from "nodemailer";

function isInvalidText(text) {
    return !text || text.trim() === "";
}

export async function sendEmail(prevState, formData) {
    const message = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    if (isInvalidText(message.name)) {
        return { message: "Not valid name, please try again" };
    }
    if (isInvalidText(message.email)) {
        return { message: "Not valid email, please try again" };
    }
    if (isInvalidText(message.message)) {
        return { message: "Not valid message, please try again" };
    }
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const mainEmailPromise = transporter.sendMail({
            from: "donotreply@arturogamez.com", // Sender's email (could be your app's email)
            to: "contact@arturogamez.com", // Your recipient email
            subject: "[PORTFOLIO] Email from portfolio website",
            text: `
            Name: ${message.name},
            Email: ${message.email},
            Email: ${message.message}
            `,
        });
        const thankYouEmailPromise = transporter.sendMail({
            from: "donotreply@arturogamez.com",
            to: formData.get("email"),
            subject: "Thank you for your interest!",
            html: `
        <p>Thank you for your message. I will get back to you soon. 🫡</p>
        <br>
        <p>Best regards,</p>
        <p>Arturo Gamez</p>
        <p>Full Stack Developer</p>
        <br>
        <a href="https://www.linkedin.com/in/arturo-gamez/">Linkedin</a>
        <a href="https://www.arturogamez.com">Portfolio</a>
        <a href="https://github.com/GamezAr94">Github</a>
      `,
        });

        await Promise.all([mainEmailPromise, thankYouEmailPromise]);
    } catch (error) {
        return {
            message: "There was an error sending your message: " + error,
        };
    }

    return {
        status: "success",
    };
}
