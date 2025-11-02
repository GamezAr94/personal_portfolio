'use client';

import React, { useRef } from 'react'; // Removed useEffect
import Image from 'next/image';
import { useGSAP } from '@gsap/react'; // Import the useGSAP hook
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Changed import path
import styles from './AboutSection.module.css';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
    // Refs for all elements we want to animate
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);

    // GSAP animations refactored to use the useGSAP hook
    useGSAP(
        () => {
            // --- 1. H2 "Wave" Animation ---
            // This is the same animation you use in your other components
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

            // --- 2. Image Animation ---
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }

            // --- 3. Text Content Animation (staggered) ---
            // We animate the children of the 'textContentRef' div
            if (textContentRef.current) {
                const paragraphs = gsap.utils.toArray(
                    textContentRef.current.children,
                );
                gsap.to(paragraphs, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1, // This creates the nice sequential fade-in
                    delay: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: textContentRef.current,
                        start: 'top 85%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }
        },
        { scope: sectionRef }, // Scope all animations to the section
    );

    return (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={styles.aboutGrid}>
                {/* --- Image Column --- */}
                <div className={styles.imageColumn} ref={imageRef}>
                    <Image
                        src=""
                        alt="A professional photo of Arturo Gamez"
                        width={400}
                        height={400}
                        className={styles.profileImage}
                    />
                </div>

                {/* --- Text Column --- */}
                <div className={styles.textColumn}>
                    <h2 ref={h2Ref}>A Bit About Me</h2>
                    <div ref={textContentRef}>
                        <p>
                            I'm a builder with a dual soul. I have the vibrant,
                            passionate, and yes, sometimes{' '}
                            <span className={styles.highlightMagenta}>
                                maximalist
                            </span>{' '}
                            energy of my Mexican roots. But I live and work in
                            Vancouver, where I've embraced the calm, focused,
                            and purposeful{' '}
                            <span className={styles.highlightTeal}>
                                minimalism
                            </span>{' '}
                            of the Pacific Northwest.
                        </p>
                        <p>
                            This blend defines my work. I build clean, robust,
                            and scalable systems (the minimalist part) that are
                            brought to life with delightful animations,
                            intelligent features, and a user experience that
                            just <em>feels</em> good (the maximalist part).
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring the
                            mountains, experimenting with new recipes, or diving
                            deep into a new AI paper. I'm always looking for new
                            challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
