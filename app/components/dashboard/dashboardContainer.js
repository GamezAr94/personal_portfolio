import styles from "./dashboardContainer.module.css";
import IntroductionHero from "./introductionHero";

export default function DashboardContainer() {
    return (
        <>
            <main id="#home-dashboard" className={styles.main_container}>
                <IntroductionHero />
                <div>my info</div>
            </main>
        </>
    );
}
