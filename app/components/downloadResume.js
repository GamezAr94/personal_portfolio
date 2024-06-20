"use client";
import React from "react";
import styles from "./downloadResume.module.css";

export default function DownloadResume() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/files/resume-Arturo-Gamez.pdf";
        link.download = "arturo-software_developer_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className={styles.button_wrapper}>
                <div className={styles.effect}>
                    <span></span>
                    <span></span>
                </div>
                <button className={styles.button} onClick={handleDownload}>
                    Resume<span>💾</span>
                </button>
            </div>
            <svg>
                <defs>
                    <filter id="resume_splash">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="name"
                        />
                        <feColorMatrix
                            in="name"
                            mode="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 30 -15 "
                            result="aab"
                        />
                        <feBlend in="SourceGraphic" in2="aab" />
                    </filter>
                </defs>
            </svg>
        </>
    );
}
