import ButtonSplash from "../buttonSplash";
import styles from "./innerDescription.module.css";

export default function InnerDescription() {
    return (
        <div className={styles.inner_description}>
            <p className={styles.title_content}>Who am I?</p>
            <p className={styles.desc_content}>
                I&apos;m Arturo, a full-stack developer with 3+ years of
                experience, specializing in crafting user-centric web
                applications within Linux environments. I&apos;m passionate
                about leveraging my expertise in TypeScript, React, Next.js and
                Node.js to deliver high-quality solutions. In my current role as
                a at LinuxMagic, I successfully implemented new features,
                enhanced existing code, and optimized website performance by
                11%. Additionally, by designing intuitive user interfaces, I
                reduced support calls by 7%. I&apos;m proficient in various
                development tools and methodologies, including Agile Scrum, unit
                testing and PostgreSQL database management. I&apos;m actively
                involved in open-source projects and enjoy building my own side
                projects to experiment with new technologies. I&apos;d love to
                hear about your project and see how we can collaborate to bring
                your vision to life.
            </p>
            <ButtonSplash />
        </div>
    );
}
