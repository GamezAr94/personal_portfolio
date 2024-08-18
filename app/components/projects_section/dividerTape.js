"use client";
import styles from "./dividerTape.module.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DividerTape() {
    const tapeRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Animation for the parent container
        gsap.fromTo(
            tapeRef.current,
            {
                x: -1000,
                rotate: -3,
                y: 0,
                transformOrigin: "left center",
            },
            {
                scrollTrigger: {
                    trigger: tapeRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                y: -50,
                x: 0,
                duration: 10,
            }
        );
    }, []);
    return (
        <div ref={tapeRef} className={styles.divider_tape}>
            <p className={styles.asterisk}>*</p>
            <p>my work</p>
            <p className={styles.asterisk}>*</p>
            <p>Projects</p>
            <p className={styles.asterisk}>*</p>
            <p>contributions</p>
            <p className={styles.asterisk}>*</p>
            <p>my work</p>
            <p className={styles.asterisk}>*</p>
            <p>Projects</p>
            <p className={styles.asterisk}>*</p>
            <p>contributions</p>
            <p className={styles.asterisk}>*</p>
            <p>my work</p>
            <p className={styles.asterisk}>*</p>
            <p>Projects</p>
            <p className={styles.asterisk}>*</p>
            <p>contributions</p>
            <p className={styles.asterisk}>*</p>
            <p>my work</p>
            <p className={styles.asterisk}>*</p>
            <p>Projects</p>
            <p className={styles.asterisk}>*</p>
            <p>contributions</p>
        </div>
    );
}
