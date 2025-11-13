'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ExperienceSection.module.css';
import AnimatedText from './AnimatedText';

import { useTranslations } from 'next-intl';
import { useChat } from '@/context/ChatContext';

gsap.registerPlugin(ScrollTrigger);

// --- 2. The AI Ask Button SVG ---
// Re-using the same star icon from your other components
const AiIcon = () => (
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
);

// --- 3. The Component ---
const ExperienceSection: React.FC = () => {
    const t = useTranslations('ExperienceSection');
    const t_chat = useTranslations('ChatQuestions');

    const { setContextualQuestions } = useChat();

    const jobData = [
        {
            key: 'job1', // Added a key for React
            title: t('job1_title'),
            company: t('job1_company'),
            dates: t('job1_dates'),
            description: t('job1_description'),
            tags: [
                'PostgreSQL',
                'VIM',
                'Bash',
                'Perl',
                'PHP',
                'JS',
                'CSS',
                'SASS',
                'Linux',
                'Agile',
                'HTML',
            ],
            aiQuery: t('job1_aiQuery'),
        },
        {
            key: 'job2',
            title: t('job2_title'),
            company: t('job2_company'),
            dates: t('job2_dates'),
            description: t('job2_description'),
            tags: ['JavaScript', 'PHP', 'WordPress', 'SCSS', 'MySQL', 'Git'],
            aiQuery: t('job2_aiQuery'),
        },
    ];

    // --- 4. Refs for Animation ---
    const sectionRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // --- 5. GSAP Animations ---
    useGSAP(
        () => {
            // --- H2 "Wave" Animation (Copied from your ToolkitSection) ---
            const h2 = h2Ref.current;
            if (h2) {
                const originalText = t('title');
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

            // --- Narrative Paragraph Animation (Copied from ToolkitSection) ---
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

            // --- Timeline Job Stagger Animation (Similar to ToolkitSection) ---
            if (timelineRef.current) {
                const jobs = gsap.utils.toArray(timelineRef.current.children);
                gsap.to(jobs, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2, // Each job card animates in 0.2s after the previous
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 85%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top 50%',
                end: 'bottom 50%',

                onEnter: () => {
                    setContextualQuestions([
                        t_chat('q_experience_1'),
                        t_chat('q_experience_2'),
                    ]);
                },
                onLeaveBack: () => {
                    // Volvemos a las preguntas de 'Toolkit'
                    setContextualQuestions([
                        t_chat('q_toolkit_1'),
                        t_chat('q_toolkit_2'),
                    ]);
                },
            });
        },
        {
            scope: sectionRef,
            dependencies: [t, t_chat, setContextualQuestions],
        },
    );

    return (
        <section
            id="experience"
            className={styles.experienceSection}
            ref={sectionRef}
        >
            {/* --- 6. Narrative Header (Same as Toolkit) --- */}
            <div className={styles.narrative}>
                <h2 className={styles.title} ref={h2Ref}>
                    {t('title')}{' '}
                </h2>
                <p ref={pRef}>{t('subtitle')}</p>
            </div>

            {/* --- 7. Timeline Container --- */}
            <div className={styles.timeline} ref={timelineRef}>
                {jobData.map((job) => (
                    <div key={job.title} className={styles.jobItem}>
                        <div className={styles.jobHeader}>
                            <h3>{job.title}</h3>
                            <span>{job.company}</span>
                        </div>
                        <span className={styles.jobDates}>{job.dates}</span>
                        <AnimatedText
                            triggerRef={timelineRef}
                            animDuration={0.02}
                        >
                            <p>{job.description}</p>{' '}
                        </AnimatedText>

                        {/* --- 8. Re-using ProjectChapter styles --- */}
                        <div className={styles.techTags}>
                            {job.tags.map((tag) => (
                                <span key={tag} className={styles.techTag}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* --- 9. Re-using ProjectChapter styles --- */}
                        <button
                            className={styles.aiAskButton}
                            data-query={job.aiQuery}
                        >
                            <AiIcon />
                            {t('aiButton')}{' '}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
