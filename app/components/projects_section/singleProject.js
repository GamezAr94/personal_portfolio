import Image from "next/image";
import styles from "./singleProject.module.css";

export default function SingleProject({
    swapped,
    title,
    subtitle,
    image,
    alt,
}) {
    return (
        <div
            className={`${styles.project_container} ${
                swapped ? styles.swapped : ""
            }`}>
            <div className={styles.img_project}>
                <picture>
                    <source
                        media="(min-width: 600px)"
                        srcSet={image[0]}></source>
                    <Image
                        className={`${styles.insta_photo} gif`}
                        src={image[1]}
                        alt={alt}
                        loading="lazy"
                        unoptimized
                    />
                </picture>
            </div>
            <div className={styles.desc_project}>
                <p className={styles.title_project}>{title}</p>
                <p className={styles.subtitle_project}>{subtitle}</p>
                {
                    //<p className={styles.btn_seeMore}>Read More</p>
                }
            </div>
        </div>
    );
}
