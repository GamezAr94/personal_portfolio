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
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                </div>
            </div>
        </>
    );
}
