import Image from "next/image";
import styles from "./heroSection.module.css";
import landscape from "@/public/img/hero_landscape_v2-min.webp";
import landscape_blue from "@/public/img/hero_landscape-blue_img_min.webp";
import landscape_red from "@/public/img/hero_landscape-red_img_mini.webp";
import MainModel from "./mainModelTD";
import StatsContainer from "./statsContainer";
import frog_character from "../../../public/img/Characters/Frog-Goblin.png";
import hamburger_character from "../../../public/img/Characters/hamburger_character.png";
import stuffed_character from "../../../public/img/Characters/stuffed_character.png";

export default function HeroSection() {
    return (
        <div className={styles.hero_section_container}>
            <div className={styles.hero_container}>
                <Image
                    className={`${styles.landscape} ${styles.hero_img_green}`}
                    src={landscape}
                    alt="a landscape that matches with our main character, a frog, it is portraying a red big mushroom"
                    priority={true}></Image>
                <Image
                    className={`${styles.landscape} ${styles.hero_img_red}`}
                    src={landscape_red}
                    alt="a landscape that matches with our stuffed cute character, a stuffed character and a chicken, it is portraying a cure and fluffy landscape"
                    priority={true}></Image>
                <Image
                    className={`${styles.landscape} ${styles.hero_img_blue}`}
                    src={landscape_blue}
                    alt="a landscape that matches with our hamburger character, it is portraying a landscape where nature is only fast food"
                    priority={true}></Image>
                <StatsContainer />
                <div className={styles.divider}></div>
            </div>
            <div className={`${styles.model_3d}`}>
                <MainModel />
            </div>
            <div className={`${styles.hero_img} ${styles.hero_img_green}`}>
                <Image
                    src={frog_character}
                    alt="image of the frog main character"
                />
            </div>
            <div className={`${styles.hero_img} ${styles.hero_img_blue}`}>
                <Image
                    src={hamburger_character}
                    alt="image of the hamburger character"
                />
            </div>
            <div className={`${styles.hero_img} ${styles.hero_img_red}`}>
                <Image
                    src={stuffed_character}
                    alt="image of the cute stuffed character"
                />
            </div>
        </div>
    );
}
