import styles from "./dashboardContainer.module.css";
import Menu from "./menu";

export default function DashboardContainer() {
    return (
        <main className={styles.main_container}>
            <Menu />
            <div>hero and title</div>
            <div>my info</div>
        </main>
    );
}
