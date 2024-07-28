"use client";
import { useFormState } from "react-dom";
import styles from "./contactEntry.module.css";
import FormSection from "./formSection";
import { sendEmail } from "@/lib/actions";
import SuccessMessage from "./successMessage";

export default function ContactEntry() {
    const [state, formAction] = useFormState(sendEmail, {
        status: "n/a",
        message: null,
    });
    return (
        <>
            <div className={styles.contact_container} id="contact_sect">
                <div className={styles.main_container}>
                    <div className={styles.first_layer}></div>
                    <div className={`${styles.rock} ${styles.r1}`}></div>
                    <div className={`${styles.rock} ${styles.r2}`}></div>
                    <div className={styles.second_layer}>
                        {state.status === "success" ? (
                            <>
                                <div className={styles.header_container}>
                                    <p className={styles.title}>Thank you!</p>
                                    <p className={styles.sub_title}>
                                        I truly appreciate your interest, I will
                                        contact you ASAP 🫡
                                    </p>
                                </div>
                                <SuccessMessage />
                            </>
                        ) : (
                            <>
                                <div className={styles.header_container}>
                                    <p className={styles.title}>
                                        Let&apos;s talk
                                    </p>
                                    <p className={styles.sub_title}>
                                        Are you looking to expand your web
                                        development team?
                                    </p>
                                </div>
                                <FormSection
                                    formAction={formAction}
                                    state={state}
                                />
                                <div className={styles.contact_methods}>
                                    <a
                                        href={`mailto:${process.env.MY_EMAIL}?subject=[WebPortfolio]%20Job%20Inquiry`}>
                                        contact@arturogamez.com
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/arturo-gamez/">
                                        arturo-gamez
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={`${styles.rock} ${styles.r3}`}></div>
                    <div className={`${styles.rock} ${styles.r4}`}></div>
                </div>
            </div>
        </>
    );
}
