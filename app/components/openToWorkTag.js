import Link from "next/link";
import styles from "./openToWorkTag.module.css";

export default function OpenToWorkTag({ size }) {
    let size_type = styles.small;
    if (size == "medium") {
        size_type = styles.medium;
    }
    if (size == "large") {
        size_type = styles.large;
    }
    // TODO add the link to the contact form
    return (
        <Link href="#" className={`${styles.tag} ${size_type}`}>
            Open To Work
        </Link>
    );
}
