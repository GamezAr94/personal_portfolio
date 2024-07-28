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

    // Introduce the delay (e.g., 3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));

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
        /*
        await transporter.sendMail({
            from: "donotreply@arturogamez.com", // Sender's email (could be your app's email)
            to: "contact@arturogamez.com", // Your recipient email
            subject: "[PORTFOLIO] Email from portfolio website",
            text: `
            Name: ${message.name},
            Email: ${message.email},
            Email: ${message.message}
            `,
        });
        */
    } catch (error) {
        return {
            message: "There was an error sending your message: " + error,
        };
    }

    return {
        status: "success",
    };
}
