import Image from "next/image";
import styles from "./photoAboutMe.module.css";
import me from "@/public/img/MyPictures/myself_v2.jpg";
import MainLogo from "../mainLogo";

export default function PhotoAboutMe() {
    return (
        <div className={styles.photo_container}>
            <span className={styles.iphone_style}></span>
            <div className={styles.feed_photo}>
                <div className={styles.header}>
                    <MainLogo style="small" />
                    <p>Arturo Gamez | Coder</p>
                </div>
                <div className={styles.description}>
                    <p>This is me ^, I am a software developer</p>
                </div>
                <div className={styles.icons}>
                    <p>♥️</p>
                </div>
            </div>
            <Image
                className={`${styles.insta_photo}`}
                src={me}
                alt="a landscape that matches with our stuffed cute character, a stuffed character and a chicken, it is portraying a cure and fluffy landscape"
                priority={true}
            />
        </div>
    );
}
