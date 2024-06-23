import Link from "next/link";
import styles from "./menuItems.module.css";

export default function MenuItems({ href, title, text }) {
    return (
        <Link className={styles.anchor_tag} href={href}>
            {text}
            <span className={styles.title_container}>{title}</span>
        </Link>
    );
}
