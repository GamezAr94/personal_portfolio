import Image from "next/image";
import styles from "./heroSection.module.css";
import landscape from "@/public/img/hero_landscape_v2-min.webp";
import MainModel from "./mainModelTD";
import StatsContainer from "./statsContainer";
import frog_character from "../../../public/img/Characters/Frog-Goblin.png";

export default function HeroSection() {
    return (
        <div className={styles.hero_section_container}>
            <div className={styles.hero_container}>
                <Image
                    className={styles.landscape}
                    src={landscape}
                    alt="a landscape that matches with out main character, a frog, it is portraying a red big mushroom"
                    priority={true}></Image>
                <StatsContainer />
                <div className={styles.divider}></div>
            </div>
            <div className={styles.model_3d}>
                <MainModel />
            </div>
            <Image
                className={`${styles.hero_img} ${styles.frog_goblin}`}
                src={frog_character}
                alt="image of the frog main character"
            />
        </div>
    );
}
