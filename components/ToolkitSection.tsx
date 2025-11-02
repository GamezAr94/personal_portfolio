'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ToolkitSection.module.css';

gsap.registerPlugin(ScrollTrigger);

// Data for the toolkit
const toolCategories = [
    {
        title: 'Frontend',
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
        title: 'Backend',
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
        title: 'Databases & Tools',
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
    const sectionRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
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
        },
        { scope: sectionRef },
    );

    return (
        <section
            id="toolkit"
            className={styles.toolkitSection}
            ref={sectionRef}
        >
            <div className={styles.textCenter}>
                <h2 className={styles.title} ref={h2Ref}>
                    My Toolkit
                </h2>
                <p ref={pRef}>
                    I'm always learning, but these are the technologies I'm most
                    comfortable with.
                </p>
            </div>

            <div className={styles.toolkitGrid} ref={gridRef}>
                {toolCategories.map((category) => (
                    <div key={category.title} className={styles.toolkitCard}>
                        <h3 className={styles.cardTitle}>{category.title}</h3>
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
