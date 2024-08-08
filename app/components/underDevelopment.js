import Link from "next/link";
import styles from "./underDevelopment.module.css";

export default function UnderDevelopment() {
    return (
        <div className={styles.under_development}>
            <p className={styles.thanks}>Thank you for your interest!</p>
            <div className={styles.message_container}>
                <p className={styles.invite}>
                    This section is under construction, but I invite you to
                    check out my{" "}
                    <Link
                        className={styles.text_anchor}
                        href="https://github.com/GamezAr94">
                        GitHub
                    </Link>{" "}
                    projects. I&apos;m sure you&apos;ll find something
                    interesting there!
                </p>
            </div>
            <Link
                className={styles.image_anchor}
                href="https://github.com/GamezAr94"></Link>
            <p className={styles.message}>
                This section still under development
            </p>
        </div>
    );
}
