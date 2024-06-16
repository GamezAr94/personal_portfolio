import Link from "next/link";
import styles from "./introduction.module.css";
import OpenToWorkTag from "../openToWorkTag";

export default function Introduction() {
    // TODO set the contact me form id
    return (
        <>
            <div className={styles.salutation_container}>
                <h2>
                    <span>Hi!&nbsp;</span>
                    <span>I'm Arturo.</span>
                </h2>
                <h1>Full Stack Software Developer.</h1>
                <OpenToWorkTag size="small" />
            </div>
            <Link href="#target-section" className={styles.contact_me}>Contact Me</Link>
        </>
    );
}
