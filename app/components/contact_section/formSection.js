"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import styles from "./formSection.module.css";

export default function FormSection({ formAction, state }) {
    const [isEmpty, setIsEmpty] = useState({
        name: false,
        email: true,
        message: true,
    });
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };
    function setNameStatus(e) {
        setIsEmpty((prevState) => ({
            ...prevState,
            name: e.target.value ? false : true,
        }));
    }
    function setEmailStatus(e) {
        setIsEmpty((prevState) => ({
            ...prevState,
            email: e.target.value ? false : true,
        }));
    }
    function setMessageStatus(e) {
        setIsEmpty((prevState) => ({
            ...prevState,
            message: e.target.value ? false : true,
        }));
    }

    return (
        <form className={styles.contact_form_container} action={formAction}>
            <div className={styles.container_input}>
                <input
                    onChange={setNameStatus}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                />
            </div>
            <div className={styles.container_input}>
                <input
                    onChange={setEmailStatus}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                />
            </div>
            <div className={styles.container_input}>
                <textarea
                    onChange={setMessageStatus}
                    id="message"
                    name="message"
                    required
                    className={isEmpty.message ? "" : styles.setHeight}
                    placeholder="Message"></textarea>
            </div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
            />
            {state.message && (
                <p className={styles.error_message}>{state.message}</p>
            )}
            <Submit
                isReady={isEmpty.name || isEmpty.email || isEmpty.message}
            />
        </form>
    );
}

function Submit({ isReady }) {
    const { pending } = useFormStatus();
    return (
        <button
            className={`${styles.submit_button} ${
                isReady ? styles.disabled : ""
            }`}
            disabled={pending}>
            {pending ? "Submitting.." : "Send Message"}
        </button>
    );
}
