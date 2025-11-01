'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './PlaygroundCard.module.css';
import Image from 'next/image'; // Use Next.js Image for optimization

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
                ease: 'elastic.out(1, 0.5)',
                // Use ScrollTrigger to trigger animation when the card scrolls into view
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'restart pause resume pause',
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
                <p>{description}</p>
                <button className={styles.aiAskButton} onClick={handleAskClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2L14.39 8.39L21 10.39L16.39 14.39L17.61 21L12 17.61L6.39 21L7.61 14.39L3 10.39L9.61 8.39L12 2z" />
                    </svg>
                    Ask AI about this
                </button>
            </div>
        </div>
    );
};

export default PlaygroundCard;
