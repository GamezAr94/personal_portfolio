'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ExperienceSection.module.css';
import AnimatedText from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

// --- 1. Your Experience Data ---
// We can store this here for now. Later, we'll move it to a data file for i18n.
const jobData = [
    {
        title: 'Full-Stack Developer',
        company: 'Your Current Company',
        dates: '2021 - Present',
        description:
            'As a full-stack developer for the large-scale MagicMail platform, I spearheaded the development of a new administrative PWA dashboard, replacing a 12-page legacy interface with a streamlined, single-page application. This new dashboard saves administrators ~3 hours daily by consolidating key metrics into one view, utilizing a custom PWA with a WebSocket API and push notifications. I also enhanced platform-wide security by architecting and implementing modern features like DKIM and Domain Health Check tools, protecting data for over 400+ ISPs. Finally, I improved application performance by refactoring complex, +3-second data queries into asynchronous background tasks and much more.',
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
        aiQuery: 'Tell me about the Full-Stack Developer role at MagicMail',
    },
    {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        dates: '2019 - 2021',
        description:
            "As an independent full-stack developer and consultant, I managed the full project lifecycle for 3 clients, from initial concept and UI/UX design to final launch. I engineered and delivered 3 bespoke web applications in 9 months. My key projects included building a client's first-ever e-commerce platform to support their 60+ product catalog and +30 events online.",
        tags: ['JavaScript', 'PHP', 'WordPress', 'SCSS', 'MySQL', 'Git'],
        aiQuery: 'What kind of projects did Arturo do as a freelancer?',
    },
];

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
        },
        { scope: sectionRef },
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
                    My Experience
                </h2>
                <p ref={pRef}>Where I've applied my skills.</p>
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
                            animDuration={0.2}
                        >
                            <p>{job.description}</p>
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
                            Ask AI about this role
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
