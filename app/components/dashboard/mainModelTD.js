import Spline from "@splinetool/react-spline/next";
import styles from "./mainModelTD.module.css";
import { Suspense } from "react";
import { isMobile } from "react-device-detect";

export default function MainModel() {
    return (
        <Suspense
            fallback={<div className={styles.loading_element}>Loading...</div>}>
            {isMobile ? <p>THIS IS MOBILE</p> : <p>NOT MOBILE!</p>}
            <Spline
                className={styles.model}
                width={738}
                height={666}
                scene="https://prod.spline.design/xUvQAzFB9FC1FWF8/scene.splinecode"
            />
        </Suspense>
    );
}
