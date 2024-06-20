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
                    <span>I&apos;m Arturo.</span>
                </h2>
                <h1>Full Stack Software Developer.</h1>
                <OpenToWorkTag size="small" />
            </div>
            <div className={styles.button_wrapper}>
                <div className={styles.effect}>
                    <span></span>
                    <span></span>
                </div>
                <Link href="#target-section" className={styles.contact_me}>
                    Contact Me
                </Link>
            </div>
            <svg>
                <defs>
                    <filter id="contact_filter">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="name"
                        />
                        <feColorMatrix
                            in="name"
                            mode="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 30 -15 "
                            result="aab"
                        />
                        <feBlend in="SourceGraphic" in2="aab" />
                    </filter>
                </defs>
            </svg>
        </>
    );
}
