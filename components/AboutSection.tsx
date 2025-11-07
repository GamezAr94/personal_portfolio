'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';

import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

// This function recursively traverses DOM nodes
const wrapWordsInSpans = (
    node: Node,
    styles: { readonly [key: string]: string },
) => {
    // We only care about text nodes and element nodes
    if (node.nodeType === 3) {
        // Node.TEXT_NODE
        const text = node.textContent;
        // If text is just whitespace, ignore it
        if (!text || text.trim() === '') return;

        const fragment = document.createDocumentFragment();
        // Split text content into words
        const words = text.split(' ');

        words.forEach((word, index) => {
            if (word) {
                const span = document.createElement('span');
                span.className = styles.aboutWord; // Use the style from CSS module
                span.textContent = word;
                fragment.appendChild(span);
            }
            // Add the space back in
            if (index < words.length - 1) {
                fragment.appendChild(document.createTextNode(' '));
            }
        });

        // Replace the original text node with our new fragment of word spans
        node.parentNode?.replaceChild(fragment, node);
    } else if (node.nodeType === 1) {
        // Node.ELEMENT_NODE
        // It's an element (like <p> or your highlight <span>)
        // We need to loop through its children and recursively call this function
        // We copy to an array because childNodes is a live list and will change
        const children = Array.from(node.childNodes);
        children.forEach((child) => wrapWordsInSpans(child, styles));
    }
};

const AboutSection: React.FC = () => {
    const t = useTranslations('AboutSection');

    // ... all your existing refs (sectionRef, imageRef, h2Ref, textContentRef) ...
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // --- 1. H2 "Wave" Animation (This stays the same) ---
            const h2 = h2Ref.current;
            if (h2) {
                // ... your existing wave animation code ...
                const originalText = h2.textContent || '';
                let newHTML = '';
                // Save the words to a variable
                const words = originalText.split(' ');

                // Add "index" to the forEach loop
                words.forEach((word, index) => {
                    let wordHTML = `<span class=${styles.word}>`;
                    word.split('').forEach((char) => {
                        wordHTML += `<span class=${styles.letter}>${char}</span>`;
                    });
                    wordHTML += '</span>';
                    newHTML += wordHTML;

                    // ✅ ADD THIS IF-STATEMENT
                    // This adds the space back, unless it's the very last word
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

            // --- 2. Image Animation (This stays the same) ---
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    // ... your existing image animation code ...
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

            // --- 3. Text Content Animation (THIS IS THE MODIFICATION) ---
            if (textContentRef.current) {
                const paragraphs = gsap.utils.toArray(
                    textContentRef.current.children,
                ) as HTMLElement[];

                //    This creates all the .aboutWord spans right now.
                paragraphs.forEach((p) => wrapWordsInSpans(p, styles));

                // 2. REMOVE the hasSplit flag and onEnter.
                // let hasSplit = false; // <-- DELETE THIS

                // 3. Create the timeline.
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: textContentRef.current,
                        start: 'top 85%',
                        toggleActions: 'restart pause resume reset', // Use 'reset' to replay
                        // onEnter: () => { ... } // <-- DELETE THIS
                    },
                });

                // Now, animate each paragraph
                paragraphs.forEach((p, index) => {
                    const words = p.querySelectorAll(`.${styles.aboutWord}`);

                    // Fade in the paragraph container itself
                    tl.to(p, { opacity: 1, duration: 0.1 });

                    // Stagger-fade in each word
                    tl.to(words, {
                        opacity: 1,
                        duration: 0.1, // How long each word takes to fade in
                        stagger: 0.025, // The delay between each word
                        ease: 'none',
                    });

                    // Add a small pause between paragraphs
                    if (index < paragraphs.length - 1) {
                        tl.add('+=0.25');
                    }
                });
            }
        },
        { scope: sectionRef, dependencies: [t] },
    );

    return (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={styles.aboutGrid}>
                {/* --- Image Column --- */}
                <div className={styles.imageColumn} ref={imageRef}>
                    <Image
                        src="/img/about_me_image.jpg" // Placeholder
                        alt="A professional photo of Arturo Gamez"
                        width={400}
                        height={400}
                        className={styles.profileImage}
                    />
                </div>

                {/* --- Text Column --- */}
                <div className={styles.textColumn}>
                    <h2 ref={h2Ref}>{t('title')}</h2>
                    {/* This ref is all you need for the JSX */}
                    <div ref={textContentRef}>
                        <p>
                            {t.rich('p1', {
                                teal: (chunks) => (
                                    <span className={styles.highlightTeal}>
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </p>
                        <p>
                            {/* Use t.rich() to replace <magenta> tags */}
                            {t.rich('p2', {
                                magenta: (chunks) => (
                                    <span className={styles.highlightMagenta}>
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </p>
                        <p>
                            {/* Use t.rich() for multiple tags */}
                            {t.rich('p3', {
                                teal: (chunks) => (
                                    <span className={styles.highlightTeal}>
                                        {chunks}
                                    </span>
                                ),
                                magenta: (chunks) => (
                                    <span className={styles.highlightMagenta}>
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
