import styles from "./introductionHero.module.css";
import Introduction from "./introduction";
import HeroSection from "./heroSection";
import BackgroundSymbols from "./backgroundSymbols";

export default function IntroductionHero() {
    return (
        <div className={styles.introduction_container}>
            <BackgroundSymbols />
            <div className={styles.introduction}>
                <Introduction />
            </div>
            <div className={styles.hero}>
                <HeroSection />
            </div>
        </div>
    );
}
