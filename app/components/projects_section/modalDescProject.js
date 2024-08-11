"use client";
import Image from "next/image";
import styles from "./modalDescProject.module.css";

import lucygame_sm from "@/public/img/lucyGame/lucy_grab_light.png";
import onlineIde_sm from "@/public/img/onlineIDE/more_code.png";

import useEmblaCarousel from "embla-carousel-react";

export default function ModalDescProject({ closeModal, details }) {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className={styles.main_box}>
            <div onClick={closeModal} className={styles.modal_wrapper}></div>
            <div className={styles.modal_container}>
                <div className={styles.images_container}>
                    <div
                        className={`${styles.big_img} ${styles.desktop}`}
                        ref={emblaRef}>
                        <div className={styles.embla__container}>
                            <Image
                                className={styles.embla__slide}
                                src={onlineIde_sm}
                                alt="hola"
                                loading="lazy"
                            />
                            <Image
                                className={styles.embla__slide}
                                src={lucygame_sm}
                                alt="hola"
                                loading="lazy"
                            />
                            <Image
                                className={styles.embla__slide}
                                src={lucygame_sm}
                                alt="hola"
                                loading="lazy"
                            />
                            <Image
                                className={styles.embla__slide}
                                src={lucygame_sm}
                                alt="hola"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className={`${styles.big_carousel} ${styles.mobile}`}>
                        <Image
                            className={styles.embla__slide}
                            src={lucygame_sm}
                            alt="hola"
                            loading="lazy"
                        />
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
