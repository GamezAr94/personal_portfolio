import Link from "next/link";
import styles from "./mainLogo.module.css";

export default function MainLogo({style}) {
    console.log(style);
    return (
        <Link className={`${styles.logo} ${styles[style]}`} href="#home-dashboard">
            AG
        </Link>
    );
}
