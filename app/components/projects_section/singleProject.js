"use client";
import Image from "next/image";
import styles from "./singleProject.module.css";
import { Tilt } from "@jdion/tilt-react";
import { useState } from "react";
import ModalDescProject from "./modalDescProject";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SingleProject({ swapped, projectObj }) {
    const projectRef = useRef();
    const titleContainerRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Animation for the parent container
        gsap.fromTo(
            projectRef.current,
            {
                x: swapped ? 500 : -500,
                opacity: 0,
                skewX: swapped ? -10 : 10,
                scale: 0.7,
            },
            {
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top 95%",
                    end: "20% center",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                skewX: 0,
                scale: 1,
                x: 0,
                opacity: 1,
                duration: 6,
            }
        );
        gsap.fromTo(
            titleContainerRef.current,
            { x: swapped ? 500 : -500, opacity: 0, scale: 2 },
            {
                scrollTrigger: {
                    trigger: titleContainerRef.current,
                    start: "20% bottom",
                    end: "20% center",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                scale: 1,
                opacity: 1,
                x: 0,
                duration: 5,
            }
        );
    }, [swapped]);

    const [isShown, setShown] = useState(false);

    function toggeDescModal() {
        setShown(!isShown);
    }
    const defaultOptions = {
        reverse: false, // reverse the tilt direction
        max: 35, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 2000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };
    return (
        <>
            {isShown && (
                <ModalDescProject
                    closeModal={toggeDescModal}
                    projectObj={projectObj}
                />
            )}
            <div
                ref={projectRef}
                className={`${styles.project_container} ${
                    swapped ? styles.swapped : ""
                }`}>
                <div className={styles.img_project}>
                    <Tilt options={defaultOptions}>
                        <picture>
                            <source
                                media="(min-width: 600px)"
                                srcSet={projectObj.main_image[0]}></source>
                            <Image
                                onClick={toggeDescModal}
                                className={`${styles.insta_photo}`}
                                src={projectObj.main_image[1]}
                                alt={projectObj.alt_main_img}
                                loading="lazy"
                                unoptimized
                            />
                        </picture>
                    </Tilt>
                </div>
                <div ref={titleContainerRef} className={styles.desc_project}>
                    <p className={styles.title_project}>{projectObj.title}</p>
                    <p className={styles.subtitle_project}>
                        {projectObj.subtitle}
                    </p>
                    <p className={styles.short_desc}>{projectObj.shortDesc}</p>
                    <p className={styles.btn_seeMore} onClick={toggeDescModal}>
                        Read More
                    </p>
                </div>
            </div>
        </>
    );
}
