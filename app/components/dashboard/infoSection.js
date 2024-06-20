import DownloadResume from "../downloadResume";
import Link from "next/link";
import styles from "./infoSectio.module.css";

export default function InfoSection() {
    return (
        <div className={styles.main_container}>
            <div className={styles.theme_picker}>hola</div>
            <div className={styles.about_section}>
                <div className={styles.about_title}>
                    <h6>About</h6>
                </div>
                <div className={styles.about_container}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent vitae tincidunt enim, eget aliquam massa. Ut
                        rutrum enim nisi, a semper erat condimentum et.
                        Suspendisse faucibus libero turpis, suscipit imperdiet
                        lectus euismod eu. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus. Nam sed justo eget orci
                        dignissim posuere. Morbi pulvinar augue dui, ac lobortis
                        mi accumsan sed. Sed nec massa at magna convallis
                        tristique.
                    </p>
                </div>
                <div className={styles.about_buttons}>
                    <Link href="#">read more...</Link>
                    <p>OR</p>
                    <DownloadResume />
                </div>
            </div>
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
