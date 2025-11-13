'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PlaygroundCard from './PlaygroundCard';
import styles from './PlaygroundChapter.module.css';

import { useTranslations } from 'next-intl';
import { useChat } from '@/context/ChatContext';

gsap.registerPlugin(ScrollTrigger);

type PlaygroundProject = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    aiQuery: string;
};

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
}) => {
    const t = useTranslations('ProjectChapters');
    const t_chat = useTranslations('ChatQuestions');

    const { setContextualQuestions } = useChat();

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
                const originalText = chapterTitle;
                let newHTML = '';

                const words = originalText.split(' ');
                words.forEach((word, index) => {
                    let wordHTML = `<span class=${styles.word}>`;
                    word.split('').forEach((char) => {
                        wordHTML += `<span class=${styles.letter}>${char}</span>`;
                    });
                    wordHTML += '</span>';
                    newHTML += wordHTML;

                    if (index < words.length - 1) {
                        newHTML += ' ';
                    }
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

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top 50%',
                end: 'bottom 50%', // (No importa mucho el 'end' aquí)

                onEnter: () => {
                    setContextualQuestions([
                        t_chat('q_playground_1'),
                        t_chat('q_playground_2'),
                    ]);
                },
                onLeaveBack: () => {
                    // Volvemos a las preguntas de 'Project Chapter 3'
                    setContextualQuestions([
                        t_chat('q_projects_ch3_1'),
                        t_chat('q_projects_ch3_2'),
                    ]);
                },
            });
        }, sectionRef); // Scope animations

        return () => ctx.revert(); // Cleanup
    }, [chapterTitle, narrative, t_chat, setContextualQuestions]);

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
                    <PlaygroundCard key={index} {...project} />
                ))}
            </div>

            {hasMoreProjects && (
                <div className={styles.showMoreContainer} ref={showMoreRef}>
                    <button
                        onClick={handleShowMore}
                        className={styles.ctaButton}
                    >
                        {t('playground_showMore')}{' '}
                    </button>
                </div>
            )}
        </section>
    );
};

export default PlaygroundChapter;
