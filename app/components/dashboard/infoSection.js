import styles from "./infoSectio.module.css";

export default function InfoSection() {
    return (
        <div className={styles.main_container}>
            <div className={styles.theme_picker}>hola</div>
            <div className={styles.about_section}>hola</div>
            <div className={styles.skills}>
                <h6>Skills</h6>
                <div className={styles.skills_container}>
                    <div>next</div>
                    <div>react</div>
                    <div>mongo</div>
                    <div>three</div>
                </div>
            </div>
        </div>
    );
}
