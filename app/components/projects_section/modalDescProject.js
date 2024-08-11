"use client";
import Image from "next/image";
import styles from "./modalDescProject.module.css";

export default function ModalDescProject({ closeModal, details }) {
    return (
        <div className={styles.main_box}>
            <div onClick={closeModal} className={styles.modal_wrapper}></div>
            <div className={styles.modal_container}>
                <div className={styles.images_container}>
                    <div className={`${styles.big_img} ${styles.desktop}`}>
                        IMG
                    </div>
                    <div
                        className={`${styles.small_carousel} ${styles.desktop}`}>
                        carousel
                    </div>
                    <div
                        className={`${styles.big_carousel} ${styles.mobile}`}>
                        big carousel
                    </div>
                    {/*
                        <picture>
                            <source
                                media="(min-width: 600px)"
                                srcSet={image[0]}></source>
                            <Image
                                onClick={toggeDescModal}
                                className=""
                                src={image[1]}
                                alt={alt}
                                loading="lazy"
                                unoptimized
                            />
                        </picture>
                        */}
                </div>
                <div className={styles.content_container}>content</div>
            </div>
        </div>
    );
}
