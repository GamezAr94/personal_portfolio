import Link from "next/link";
import styles from "./menu.module.css";
import MenuHamburger from "./menuHamburger";
import MenuItems from "./menuItems";
import MainLogo from "./mainLogo";

export default function Menu() {
    return (
        <header className={styles.header_container}>
            <MainLogo />
            <MenuHamburger />
            <div className={styles.menu_bar}>
                <MenuItems href="#" title="Profile" text="🫡" />
                <MenuItems href="#" title="Skills" text="🧠" />
                <MenuItems href="#" title="Experience" text="💼" />
                <MenuItems href="#" title="Projects" text="&#123; &#125;" />
                <MenuItems href="#" title="Contact" text="️✉️️️" />
            </div>
        </header>
    );
}
