"use client";
import ButtonSplash from "../buttonSplash";
import styles from "./innerDescription.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InnerDescription() {
    const titleRef = useRef();
    const descRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Animation for the parent container
        gsap.fromTo(
            descRef.current,
            {
                y: 300,
                opacity: 0,
                scale: 0.7,
            },
            {
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 90%",
                    end: "20% 70%",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 6,
            }
        );
        gsap.fromTo(
            titleRef.current,
            {
                y: 500,
                opacity: 0,
                scale: 0.7,
            },
            {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "20% 80%",
                    scrub: 1,
                    toggleActions: "restart none none pause",
                    //markers: true, //Exellent way to debug the start and end point
                },
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 6,
            }
        );
    }, []);

    return (
        <div className={styles.inner_description}>
            <p ref={titleRef} className={styles.title_content}>
                Who am I?
            </p>
            <p ref={descRef} className={styles.desc_content}>
                I&apos;m Arturo, a full-stack developer with 3+ years of
                experience, specializing in crafting user-centric web
                applications within Linux environments. I&apos;m passionate
                about leveraging my expertise in TypeScript, React, Next.js and
                Node.js to deliver high-quality solutions. In my current role as
                a front-end developer at LinuxMagic, I successfully implemented
                new features, enhanced existing code, and optimized website
                performance by 11%. Additionally, by designing intuitive user
                interfaces, I reduced support calls by 7%. I&apos;m proficient
                in various development tools and methodologies, including Agile
                Scrum, unit testing and PostgreSQL database management. I&apos;m
                actively involved in open-source projects and enjoy building my
                own side projects to experiment with new technologies. I&apos;d
                love to hear about your project and see how we can collaborate
                to bring your vision to life.
            </p>
            <ButtonSplash section={"aboutMe"} />
        </div>
    );
}
