"use client";
import handleThemeClick from "../themeColors";
import styles from "./themePicker.module.css";

export default function ThemePicker() {
    return (
        <div className={styles.theme_picker} aria-label="Theme Picker">
            <div className={styles.theme_holder}>
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
                <p aria-hidden="true">🎨</p> {/* Decorative element */}
            </div>
        </div>
    );
}
