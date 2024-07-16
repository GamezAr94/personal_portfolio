import ButtonSplash from "../buttonSplash";
import styles from "./innerDescription.module.css";

export default function InnerDescription() {
    return (
        <div className={styles.inner_description}>
            <p className={styles.title_content}>Who am I?</p>
            <p className={styles.desc_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut sem id diam interdum varius pharetra consequat
                lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Curabitur tristique
                fermentum eros, faucibus accumsan nisi convallis dictum.{" "}
            </p>
            <ButtonSplash />
        </div>
    );
}
