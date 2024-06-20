import Link from "next/link";
import styles from "./buttonSplash.module.css";

export default function ButtonSplash() {
    return (
        <>
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
