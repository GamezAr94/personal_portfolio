import Link from "next/link";
import styles from "./introduction.module.css";
import OpenToWorkTag from "../openToWorkTag";
import ButtonSplash from "../buttonSplash";
import UnderlyingText from "../underlyingText";

export default function Introduction() {
    return (
        <>
            <div className={styles.salutation_container}>
                <h2>
                    <span>Hi!&nbsp;</span>
                    <span>I&apos;m Arturo.</span>
                </h2>
                <h1>
                    Full Stack <UnderlyingText text="Software Developer" />.
                </h1>
                <OpenToWorkTag size="small" />
            </div>
            <ButtonSplash />
        </>
    );
}
