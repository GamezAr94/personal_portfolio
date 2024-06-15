import Link from "next/link";
import styles from "./menu.module.css";
import MenuHamburger from "./menuHamburger";

export default function Menu() {
    return (
        <header className={styles.header_container}>
            <Link className={styles.logo} href="#home-dashboard">
                AG
            </Link>
            <MenuHamburger />
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
