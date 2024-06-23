import DownloadResume from "../downloadResume";
import Link from "next/link";
import styles from "./infoSectio.module.css";
import SkillsContainer from "./skillsContainer";

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
                        I&apos;m Arturo, a front-end developer with 3+ years of
                        experience, passionate about turning ideas into engaging
                        digital experiences. I&apos;m fueled by curiosity, coffee and a love
                        for clean, efficient code. I&apos;m a collaborative team
                        player, always eager to learn and grow alongside
                        talented colleagues. Let&apos;s connect and explore how I can
                        contribute to your next project!
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
                <SkillsContainer />
            </div>
        </div>
    );
}

/*
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
*/
