import Image from "next/image";
import styles from "./singleProject.module.css";

export default function SingleProject({ swapped, title, subtitle, image }) {
    return (
        <div
            className={`${styles.project_container} ${
                swapped ? styles.swapped : ""
            }`}>
            <div className={styles.img_project}>
                <Image
                    className={`${styles.insta_photo}`}
                    src={image}
                    alt="a portrait of me in a mall in vancouver"
                    priority={true}
                />
            </div>
            <div className={styles.desc_project}>
                <p className={styles.title_project}>{title}</p>
                <p className={styles.subtitle_project}>{subtitle}</p>
                <p className={styles.btn_seeMore}>Read More</p>
            </div>
        </div>
    );
}
