import styles from "./projectsEntry.module.css";
import SingleProject from "./singleProject";
import UnderDevelopment from "../underDevelopment";

import me_v1 from "@/public/img/MyPictures/myself_v1.jpg";

export default function ProjectsEntry() {
    return (
        <div id="projects_sect" className={styles.projects_container}>
            <div className={styles.divider_tape}>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
            </div>
            <div className={styles.projects_list}>
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design & Development"
                    image={me_v1}
                />
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design, Development"
                    swapped={true}
                    image={me_v1}
                />
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design & Development"
                    image={me_v1}
                />
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design, Development"
                    swapped={true}
                    image={me_v1}
                />
            </div>
            <UnderDevelopment />
        </div>
    );
}
