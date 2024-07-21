import Image from "next/image";
import styles from "./photoAboutMe.module.css";
import me_v1 from "@/public/img/MyPictures/myself_v1.jpg";
import me_v2 from "@/public/img/MyPictures/myself_v2.jpg";
import me_v3 from "@/public/img/MyPictures/myself_v3.jpg";
import MainLogo from "../mainLogo";

export default function PhotoAboutMe() {
    return (
        <>
            <div className={styles.photo_container}>
                <div className={styles.feed_photo}>
                    <div className={styles.header}>
                        <MainLogo style="small" />
                        <p>Arturo Gamez | Coder</p>
                    </div>
                    <div className={styles.description}>
                        <p>Enjoying one of my favorite ramen</p>
                    </div>
                    <div className={styles.icons}>
                        <p>♥️</p>
                    </div>
                </div>
                <Image
                    className={`${styles.insta_photo}`}
                    src={me_v3}
                    alt="a portrait of me eating ramen at the richmond night market"
                    priority={true}
                />
            </div>
            <div className={styles.photo_container}>
                <div className={styles.feed_photo}>
                    <div className={styles.header}>
                        <MainLogo style="small" />
                        <p>Arturo Gamez | Coder</p>
                    </div>
                    <div className={styles.description}>
                        <p>Me again 🫡</p>
                    </div>
                    <div className={styles.icons}>
                        <p>♥️</p>
                    </div>
                </div>
                <Image
                    className={`${styles.insta_photo}`}
                    src={me_v1}
                    alt="a portrait of me in a mall in vancouver"
                    priority={true}
                />
            </div>
            <div className={styles.photo_container}>
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
                    src={me_v2}
                    alt="a picture of me in xochimilco mexico"
                    priority={true}
                />
            </div>
        </>
    );
}
