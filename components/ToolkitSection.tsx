'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ToolkitSection.module.css';

import { useTranslations } from 'next-intl';
import { useChat } from '@/context/ChatContext';

gsap.registerPlugin(ScrollTrigger);

// Data for the toolkit
const toolCategories = [
    {
        title: 'frontend',
        tools: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'GSAP',
            'HTML5',
            'CSS3 / SCSS',
        ],
    },
    {
        title: 'backend',
        tools: [
            'Node.js',
            'Python',
            'C# (.NET)',
            'PHP',
            'Express.js',
            'Flask',
            'REST APIs',
            'GraphQL',
        ],
    },
    {
        title: 'databases',
        tools: [
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'Docker',
            'Git & GitHub',
            'AWS (S3, EC2)',
            'Vim / Neovim',
            'Linux',
        ],
    },
];

const ToolkitSection: React.FC = () => {
    const t = useTranslations('ToolkitSection');
    const t_chat = useTranslations('ChatQuestions');

    const { setContextualQuestions } = useChat();

    const sectionRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // --- 1. H2 "Wave" Animation ---
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

            // --- 3. Staggered Card Animation ---
            if (gridRef.current) {
                const cards = gsap.utils.toArray(gridRef.current.children);
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: gridRef.current,
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
                        t_chat('q_toolkit_1'),
                        t_chat('q_toolkit_2'),
                    ]);
                },
                onLeaveBack: () => {
                    // Volvemos a las preguntas de 'About'
                    setContextualQuestions([
                        t_chat('q_about_1'),
                        t_chat('q_about_2'),
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
            id="toolkit"
            className={styles.toolkitSection}
            ref={sectionRef}
        >
            <div className={styles.textCenter}>
                <h2 className={styles.title} ref={h2Ref}>
                    {t('title')}
                </h2>
                <p ref={pRef}>{t('subtitle')}</p>
            </div>

            <div className={styles.toolkitGrid} ref={gridRef}>
                {toolCategories.map((category) => (
                    <div key={category.title} className={styles.toolkitCard}>
                        <h3 className={styles.cardTitle}>
                            {t(category.title)}
                        </h3>
                        <div className={styles.tagsContainer}>
                            {category.tools.map((tool) => (
                                <span key={tool} className={styles.techBadge}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToolkitSection;
