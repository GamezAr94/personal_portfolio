import styles from "./introductionHero.module.css";
import Introduction from "./introduction";
import HeroSection from "./heroSection";

export default function IntroductionHero() {
    return (
        <div className={styles.introduction_container}>
            <div className={styles.bgc}>cosa</div>
            <div className={styles.introduction}>
                <Introduction />
            </div>
            <div className={styles.hero}>
                <HeroSection />
            </div>
        </div>
    );
}
