import Spline from "@splinetool/react-spline/next";
import styles from "./mainModelTD.module.css";
import { Suspense } from "react";

export default function MainModel() {
    return (
        <>
            <Suspense
                fallback={
                    <div className={styles.loading_element}>Loading...</div>
                }>
                <Spline
                    className={`${styles.model} ${styles.hero_img_green}`}
                    width={738}
                    height={666}
                    scene="https://draft.spline.design/MplG3TmNSKKdu65L/scene.splinecode"
                />
                <Spline
                    className={`${styles.model} ${styles.hero_img_red}`}
                    width={738}
                    height={666}
                    scene="https://draft.spline.design/p2yOe4-u3mlZEI0V/scene.splinecode"
                    //scene="https://draft.spline.design/5Oa5Mnfykpkixohf/scene.splinecode"
                    //scene="https://draft.spline.design/ZR4A1ABYX9t4vf5Y/scene.splinecode"
                    //scene="https://draft.spline.design/HjfGMhqBs64H4NWg/scene.splinecode"
                />
                <Spline
                    className={`${styles.model} ${styles.hero_img_blue}`}
                    width={738}
                    height={666}
                    //scene="https://draft.spline.design/x1qKIapsyu-rCif8/scene.splinecode"
                    scene="https://draft.spline.design/VmMToqdM5WXFeoeV/scene.splinecode"
                />
            </Suspense>
        </>
    );
}
