'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PlaygroundCard from './PlaygroundCard';
import styles from './PlaygroundChapter.module.css';
import { type PlaygroundProject } from '@/data/projects'; // Import the type

gsap.registerPlugin(ScrollTrigger);

// --- Component Props ---
type PlaygroundChapterProps = {
    id: string;
    chapterTitle: string;
    narrative: string;
    projects: PlaygroundProject[];
    // This function will be passed down to the card
    // It should be defined in your main page/layout
    // and control the main chat modal
    //onAskAI: (query: string) => void;
};

// --- Constants ---
const PROJECTS_TO_SHOW = 3; // How many projects to show at a time

const PlaygroundChapter: React.FC<PlaygroundChapterProps> = ({
    id,
    chapterTitle,
    narrative,
    projects,
    //onAskAI,
}) => {
    // State to manage how many projects are visible
    const [visibleCount, setVisibleCount] = useState(PROJECTS_TO_SHOW);

    // Refs for animations
    const sectionRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const showMoreRef = useRef<HTMLDivElement>(null);

    // Sliced array of projects to display
    const projectsToShow = projects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < projects.length;

    // --- "Show More" Button Click Handler ---
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + PROJECTS_TO_SHOW);
    };

    // --- GSAP Animations ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- 1. H2 "Wave" Animation ---
            const h2 = h2Ref.current;
            if (h2) {
                const originalText = h2.textContent || '';
                let newHTML = '';
                originalText.split(' ').forEach((word) => {
                    let wordHTML = `<span class=${styles.word}>`;
                    word.split('').forEach((char) => {
                        wordHTML += `<span class=${styles.letter}>${char}</span>`;
                    });
                    wordHTML += '</span>';
                    newHTML += wordHTML;
                });
                h2.innerHTML = newHTML;

                const letters = h2.querySelectorAll(`.${styles.letter}`);
                gsap.to(letters, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: h2,
                        start: 'top 85%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }

            // --- 2. Narrative Paragraph Animation ---
            if (pRef.current) {
                gsap.to(pRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: pRef.current,
                        start: 'top 90%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }

            // --- 3. "Show More" Button Animation ---
            if (showMoreRef.current) {
                gsap.to(showMoreRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: showMoreRef.current,
                        start: 'top 95%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }
        }, sectionRef); // Scope animations

        return () => ctx.revert(); // Cleanup
    }, []);

    // Refresh ScrollTrigger when new projects are added
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [visibleCount]);

    return (
        <section id={id} className={styles.chapterContainer} ref={sectionRef}>
            <div className={styles.chapterNarrative}>
                <h2 ref={h2Ref}>{chapterTitle}</h2>
                <p ref={pRef}>"{narrative}"</p>
            </div>

            <div className={styles.playgroundGrid}>
                {projectsToShow.map((project, index) => (
                    <PlaygroundCard
                        key={index}
                        {...project}
                        //onAskAI={onAskAI}
                    />
                ))}
            </div>

            {hasMoreProjects && (
                <div className={styles.showMoreContainer} ref={showMoreRef}>
                    <button
                        onClick={handleShowMore}
                        className={styles.ctaButton}
                    >
                        See More Experiments
                    </button>
                </div>
            )}
        </section>
    );
};

export default PlaygroundChapter;
