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
        <button className={styles.button} onClick={handleDownload}>
            Resume<span>💾</span>
        </button>
    );
}
