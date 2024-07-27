"use server";

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
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    return { otro: "invalid Input" };
}
