"use client";
import Image from "next/image";
import styles from "./modalDescProject.module.css";
import enter_full_screen from "@/public/img/icons/enlarge.svg";
import exit_full_screen from "@/public/img/icons/fullscreen-exit.svg";

import lucygame_sm from "@/public/img/lucyGame/lucy_grab_light.png";
import onlineIde_sm from "@/public/img/onlineIDE/more_code.png";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import DescriptionSection from "./descriptionSection";

export default function ModalDescProject({ closeModal, projectObj }) {
    const [isFullScreen, setFullScreen] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const toggleFullScreen = () => {
        setFullScreen(!isFullScreen);
    };
    console.log(projectObj);
    return (
        <div className={styles.main_box}>
            <div onClick={closeModal} className={styles.modal_wrapper}></div>
            <div className={styles.modal_container}>
                <div
                    className={`${styles.images_container}  ${styles.desktop} ${
                        isFullScreen ? styles.full_screen : ""
                    }`}>
                    <div className={`${styles.big_img}`} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {projectObj.gallery.map((obj, index) => (
                                // Loop the gallery in the modal
                                <Image
                                    key={index}
                                    className={styles.embla__slide}
                                    src={obj.img}
                                    alt={obj.alt}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={toggleFullScreen}
                        className={styles.max_screen_container}>
                        {isFullScreen ? (
                            <Image
                                src={exit_full_screen}
                                alt="icon to exit full screen"
                                loading="lazy"
                            />
                        ) : (
                            <Image
                                src={enter_full_screen}
                                alt="icon to enter full screen"
                                loading="lazy"
                            />
                        )}
                    </div>
                    <div className={styles.buttons_controllers}>
                        <button
                            className={styles.embla__prev}
                            onClick={scrollPrev}>
                            &lt;
                        </button>
                        <button
                            className={styles.embla__next}
                            onClick={scrollNext}>
                            &gt;
                        </button>
                    </div>
                </div>
                <div className={styles.content_container}>
                    <DescriptionSection projectObj={projectObj} />
                </div>
            </div>
        </div>
    );
}
