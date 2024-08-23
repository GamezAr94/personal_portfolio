import ArrowMessage from "../arrowMessage";
import styles from "./aboutMeEntry.module.css";
import InnerDescription from "./innerDescription";
import PhotoAboutMe from "./photoAboutMe";
export default function AboutMeEntry() {
    return (
        <div id="about_me_sect" className={`${styles.about_container}`}>
            <ArrowMessage message="This is me!" />
            <div className={styles.about_content}>
                <InnerDescription />
            </div>
            <div className={styles.about_photo}>
                <PhotoAboutMe />
            </div>
        </div>
    );
}
