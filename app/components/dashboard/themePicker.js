import styles from "./themePicker.module.css";

export default function ThemePicker() {
    return (
        <div className={styles.theme_picker}>
            <div className={styles.theme_holder}>
                <div className={styles.theme_container}>
                    <div className={`${styles.options} ${styles.red}`}></div>
                    <div className={`${styles.options} ${styles.blue}`}></div>
                    <div className={`${styles.options} ${styles.green}`}></div>
                </div>
                <p>🎨</p>
            </div>
        </div>
    );
}
