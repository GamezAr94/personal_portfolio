"use client";

import Link from "next/link";
import styles from "./openToWorkTag.module.css";

export default function OpenToWorkTag({ size }) {
    let size_type = styles.small;
    if (size == "medium") {
        size_type = styles.medium;
    }
    if (size == "large") {
        size_type = styles.large;
    }
    return (
        <Link href="#contact_sect" className={`${styles.tag} ${size_type}`}>
            {process.env.OPEN_TO_WORK === "true"
                ? "Open To Work"
                : "Currently Working"}
        </Link>
    );
}
