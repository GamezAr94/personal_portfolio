"use client";
import { useState } from "react";
import styles from "./menuHamburger.module.css";
import handleThemeClick from "./themeColors";

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
                    <p>
                        Profile <span>🫡</span>
                    </p>
                    <p>
                        Skills <span>🧠</span>
                    </p>
                    <p>
                        Experience <span>💼</span>
                    </p>
                    <p>
                        Projects <span>&#123; &#125;</span>
                    </p>
                    <p>
                        Contact ️<span>️✉️️️</span>
                    </p>
                    <div className={styles.theme_container}>
                        <button
                            className={`${styles.options} ${styles.red}`}
                            onClick={() => handleThemeClick("red")}
                            aria-label="Red Theme"></button>
                        <button
                            className={`${styles.options} ${styles.blue}`}
                            onClick={() => handleThemeClick("blue")}
                            aria-label="Blue Theme"></button>
                        <button
                            className={`${styles.options} ${styles.green}`}
                            onClick={() => handleThemeClick("green")}
                            aria-label="Green Theme"></button>
                    </div>
                </div>
            </div>
        </>
    );
}
