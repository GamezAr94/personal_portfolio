import Link from "next/link";
import styles from "./statsContainer.module.css";
import OpenToWorkTag from "../openToWorkTag";

export default function StatsContainer() {
    return (
        <div className={styles.stats_container}>
            <div className={styles.tag_container}>
                <OpenToWorkTag size="large" />
            </div>
            <div className={styles.details}>
                <div className={styles.top_expertise}>
                    <p className={styles.year_xp}>
                        3<span>+</span>
                    </p>
                    <p className={styles.year_string}>Years Of Experience</p>
                </div>
                <div className={styles.bottom_data}>
                    <p>4 certificates</p>
                    <p>3 published projects</p>
                </div>
            </div>
            <div className={styles.links}>
                <Link href="https://www.linkedin.com/in/arturo-gamez/"></Link>
                <Link href="https://github.com/GamezAr94"></Link>
                <Link href="mailto:contact@arturogamez.com"></Link>
            </div>
        </div>
    );
}
