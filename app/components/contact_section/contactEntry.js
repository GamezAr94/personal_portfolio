import styles from "./contactEntry.module.css";
import FormSection from "./formSection";

export default function ContactEntry() {
    return (
        <div className={styles.contact_container}>
            <div className={styles.main_container}>
                <div className={styles.first_layer}></div>
                <div className={`${styles.rock} ${styles.r1}`}></div>
                <div className={`${styles.rock} ${styles.r2}`}></div>
                <div className={styles.second_layer}>
                    <div className={styles.header_container}>
                        <p className={styles.title}>Let&apos;s talk</p>
                        <p className={styles.sub_title}>
                            Are you looking to expand your web development team?
                        </p>
                    </div>
                    <FormSection />
                    <div className={styles.contact_methods}>
                        <a
                            href={`mailto:${process.env.MY_EMAIL}?subject=[WebPortfolio]%20Job%20Inquiry`}>
                            contact@arturogamez.com
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/arturo-gamez/">
                            arturo-gamez
                        </a>
                    </div>
                </div>
                <div className={`${styles.rock} ${styles.r3}`}></div>
                <div className={`${styles.rock} ${styles.r4}`}></div>
            </div>
        </div>
    );
}
