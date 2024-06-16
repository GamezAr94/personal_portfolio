import Image from "next/image";
import styles from "./heroSection.module.css";
//import landscape from "@/public/img/hero_landscape.jpeg";
import landscape from "@/public/img/hero_landscape_v2.jpeg";

export default function HeroSection() {
    return (
        <div className={styles.hero_section_container}>
            <div className={styles.model_3d}>hero</div>
            <Image
                className={styles.landscape}
                src={landscape}
                alt="the screenshot of the dashboard page with the info of the account"
                priority={true}></Image>
        </div>
    );
}
