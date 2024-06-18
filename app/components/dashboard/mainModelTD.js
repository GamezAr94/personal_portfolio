import Spline from "@splinetool/react-spline/next";
import styles from "./mainModelTD.module.css";
import { Suspense } from "react";

export default function MainModel() {
    return (
        <Suspense
            fallback={<div className={styles.loading_element}>Loading...</div>}>
            <Spline
                className={styles.model}
                width={738}
                height={666}
                scene="https://draft.spline.design/MplG3TmNSKKdu65L/scene.splinecode"
            />
        </Suspense>
    );
}
