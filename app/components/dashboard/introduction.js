import Link from "next/link";
import styles from "./introduction.module.css";

export default function Introduction() {
    return (
        <>
            <div className={styles.salutation_container}>
                <h2>
                    <span>Hi!&nbsp;</span>
                    <span>I'm Arturo.</span>
                </h2>
                <h1>Full Stack Software Developer.</h1>
                <div>Open To Work</div>
            </div>
            <Link href="#target-section">Contact Me</Link>
        </>
    );
}
