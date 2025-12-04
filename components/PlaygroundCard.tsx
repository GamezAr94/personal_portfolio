"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./PlaygroundCard.module.css";
import Image from "next/image"; // Use Next.js Image for optimization
import AnimatedText from "./AnimatedText";

import { useTranslations } from "next-intl";
import AskAiButton from "./AskAiButton";

gsap.registerPlugin(ScrollTrigger);

type PlaygroundCardProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    aiQuery: string;
    // We'll pass the 'onAskAI' function from the parent
    //onAskAI: (query: string) => void;
};

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({
    imageUrl,
    imageAlt,
    title,
    description,
    aiQuery,
    //onAskAI,
}) => {
    const t = useTranslations("ProjectChapters");
    const t_chat = useTranslations("ChatQuestions");

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;
        if (el) {
            // This animation makes each card pop in as it appears
            gsap.to(el, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                // Use ScrollTrigger to trigger animation when the card scrolls into view
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "restart pause resume pause",
                },
            });
        }
    }, []); // Runs once when the component mounts

    const handleAskClick = () => {
        //onAskAI(aiQuery);
    };

    return (
        <div className={styles.playgroundItem} ref={cardRef}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={400}
                    height={300}
                    className={styles.playgroundImage}
                />
            </div>
            <div className={styles.playgroundItemContent}>
                <h4>{title}</h4>
                <AnimatedText triggerRef={cardRef} animDuration={0.02}>
                    <p>{description}</p>
                </AnimatedText>
                <AskAiButton
                    questionKey={aiQuery}
                    className={styles.aiAskButton}
                />
            </div>
        </div>
    );
};

export default PlaygroundCard;
