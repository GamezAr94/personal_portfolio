import styles from "./letsConnect.module.css";
import Spline from "@splinetool/react-spline/next";
import { Suspense } from "react";
import UnderlyingText from "../underlyingText";

export default function LetsConnect() {
    return (
        <div id="my_interest_sect" className={styles.contactus_container}>
            <div className={styles.slogan_container}>
                <div className={styles.big_font_container}>
                    <p className={styles.bigger_txt}>I&apos;m</p>
                    <p className={styles.bigger_txt}>always</p>
                    <p className={styles.bigger_txt}>curious</p>
                    <p className={styles.bigger_txt}>about</p>
                </div>
                <UnderlyingText mail="connect" text="Let's connect..." />
            </div>
            <div className={styles.tags_container}>
                <div className={styles.tag}>UX/UI</div>
                <div className={styles.tag}>Front-End</div>
                <div className={styles.tag}>Agile/Scrum</div>
                <div className={styles.tag}>Full-Stack</div>
                <div className={styles.tag}>React.js/Next.js</div>
                <div className={styles.tag}>Game Dev</div>
                <div className={styles.tag}>PWA</div>
                <div className={styles.tag}>Problem-Solving</div>
                <div className={styles.tag}>AWS</div>
                <div className={styles.tag}>Docker</div>
                <div className={styles.tag}>Korean Fried Chicken</div>
            </div>
            <div className={styles.asteroid_container}>
                <Suspense
                    fallback={
                        <div className={styles.loading_element}>Loading...</div>
                    }>
                    {
                        <Spline
                            className={`${styles.model} ${styles.hero_img_green}`}
                            width={1720}
                            height={1720}
                            //scene="https://draft.spline.design/f3x-fHI60lX851nv/scene.splinecode"
                            scene="https://draft.spline.design/7NWOSZpRVa9oThhP/scene.splinecode"
                        />
                    }
                </Suspense>
            </div>
        </div>
    );
}
