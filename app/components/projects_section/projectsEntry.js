import Link from "next/link";
import styles from "./projectsEntry.module.css";
import UnderlyingText from "../underlyingText";

export default function ProjectsEntry() {
    return (
        <div id="projects_sect" className={styles.projects_container}>
            <div className={styles.divider_tape}>
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
            <div className={styles.under_development}>
                <p className={styles.thanks}>Thank you for your interest!</p>
                <div className={styles.message_container}>
                    <p className={styles.invite}>
                        Don&apos;t worry, I invite you to check out my{" "}
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
                <cite className={styles.invite}>
                    &quot;A delayed game is eventually good, but a rushed game
                    is forever bad.&quot;
                </cite>
                <p className={styles.message}>
                    This section still under development
                </p>
            </div>
        </div>
    );
}
