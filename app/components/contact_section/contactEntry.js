"use client";
import { useFormState } from "react-dom";
import styles from "./contactEntry.module.css";
import FormSection from "./formSection";
import { sendEmail } from "@/lib/actions";
import SuccessMessage from "./successMessage";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactEntry() {
    const bkgRef = useRef();
    const [state, formAction] = useFormState(sendEmail, {
        status: "n/a",
        message: null,
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            bkgRef.current,
            {
                backgroundSize: "180%",
            },
            {
                scrollTrigger: {
                    trigger: bkgRef.current,
                    start: "top bottom",
                    end: "20% top",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                backgroundSize: "100%",
                duration: 6,
            }
        );
    }, []);
    return (
        <>
            <div
                ref={bkgRef}
                className={styles.contact_container}
                id="contact_sect">
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
