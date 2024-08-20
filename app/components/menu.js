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
                <MenuItems href="#about_me_sect" title="Profile" text="🫡" />
                <MenuItems href="#my_interest_sect" title="Skills" text="🧠" />
                {/*
                <MenuItems href="#projects_sect" title="Experience" text="💼" />
                */}
                <MenuItems href="#contact_sect" title="Contact" text="️✉️️️" />
                <MenuItems
                    href="#projects_sect"
                    title="Projects"
                    text="&#123; &#125;"
                />
            </div>
        </header>
    );
}
