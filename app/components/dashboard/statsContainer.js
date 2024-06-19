import Link from "next/link";
import styles from "./statsContainer.module.css";

export default function StatsContainer() {
    return (
        <div className={styles.stats_container}>
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
                <Link href="#">L</Link>
                <Link href="#">G</Link>
                <Link href="#">M</Link>
            </div>
        </div>
    );
}
