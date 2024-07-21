import styles from "./aboutMeEntry.module.css";
import InnerDescription from "./innerDescription";
import PhotoAboutMe from "./photoAboutMe";
export default function AboutMeEntry() {
    return (
        <div className={`${styles.about_container}`}>
            <div className={styles.about_content}>
                <InnerDescription />
            </div>
            <div className={styles.about_photo}>
                <PhotoAboutMe />
            </div>
        </div>
    );
}
