"use client";
import { useState } from "react";
import styles from "./menuHamburger.module.css";

export default function MenuHamburger() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const opening = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div onClick={opening} className={styles.menu_bar_hamburger}>
                <div
                    className={`${styles.hamburger_icon} ${
                        isMenuOpen ? styles.open : styles.closed
                    }`}></div>
                <div
                    className={`${styles.hamburger_icon} ${
                        isMenuOpen ? styles.open : styles.closed
                    }`}></div>
                <div
                    className={`${styles.hamburger_icon} ${
                        isMenuOpen ? styles.open : styles.closed
                    }`}></div>
            </div>
            <div
                onClick={opening}
                className={`${styles.menu_container} ${
                    isMenuOpen ? styles.container_open : styles.container_closed
                }`}>
                <div className={styles.content_menu_elements}>
                    <p>Profile <span>🫡</span></p>
                    <p>Skills <span>🧠</span></p>
                    <p>Experience <span>💼</span></p>
                    <p>Projects <span>&#123; &#125;</span></p>
                    <p>Contact ️<span>️✉️️️</span></p>
                    <div className={styles.theme_container}>
                        <div
                            className={`${styles.options} ${styles.red}`}></div>
                        <div
                            className={`${styles.options} ${styles.blue}`}></div>
                        <div
                            className={`${styles.options} ${styles.green}`}></div>
                    </div>
                </div>
            </div>
        </>
    );
}