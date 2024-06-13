import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
    return (
        <header className={styles.header_container}>
            <Link className={styles.logo} href="/">
                AG
            </Link>
            <div className={styles.menu_bar_hamburger}>
                <div className={styles.hamburger_icon}></div>
            </div>
            <div className={styles.menu_bar}>
                <div>ele</div>
                <div>ele</div>
                <div>ele</div>
                <div>ele</div>
                <div>ele</div>
            </div>
        </header>
    );
}
