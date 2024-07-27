"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import styles from "./formSection.module.css";
import { sendEmail } from "@/lib/actions";

export default function FormSection() {
    const [isEmpty, setIsEmpty] = useState({
        name: false,
        email: true,
        message: true,
    });
    const { pending } = useFormStatus();
    const [state, formAction] = useFormState(sendEmail, {
        name: null,
        email: null,
        message: null,
    });
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
                />
            </div>
            <div className={styles.container_input}>
                <input
                    onChange={setEmailStatus}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
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
            {state.message && (
                <p className={styles.error_message}>{state.message}</p>
            )}
            <button
                className={`${styles.submit_button} ${
                    isEmpty.name || isEmpty.email || isEmpty.message
                        ? styles.disabled
                        : ""
                }`}
                disabled={pending}>
                {pending ? "Submitting.." : "Send Message"}
            </button>
        </form>
    );
}
