'use client'; // Must be client component for GSAP and hooks

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import HeroChat from './HeroChat';

// Import our new CSS Module
import styles from './Hero.module.css';

// The headline text
const headline =
    "Hi, I'm Arturo. I'm a full-stack engineer building playful and intelligent digital experiences.";

export default function Hero() {
    const container = useRef(null);

    // useGSAP hook to safely set up animations
    useGSAP(
        () => {
            // Find all elements with the class '.gsap-jiggle'
            const words = gsap.utils.toArray('.gsap-jiggle');

            words.forEach((word: any) => {
                gsap.set(word, { transformOrigin: 'center center' });

                const jiggle = gsap.to(word, {
                    keyframes: [
                        { scale: 1.1, rotation: -5, duration: 0.1 },
                        { scale: 0.9, rotation: 5, duration: 0.1 },
                        { scale: 1.05, rotation: -2, duration: 0.1 },
                        { scale: 1, rotation: 0, duration: 0.1 },
                    ],
                    paused: true,
                    ease: 'power1.inOut',
                });

                // Trigger the animation on hover
                word.addEventListener('mouseenter', () => jiggle.restart());
            });
        },
        { scope: container },
    ); // Scope the animation to this component

    return (
        <section ref={container} className={styles.heroSection}>
            {/* Left Column: Text */}
            <div className={styles.leftColumn}>
                <h1 className={styles.headline}>
                    {/* Split the headline text into individual <span>s */}
                    {headline.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className={`${styles.headlineWord} gsap-jiggle`}
                        >
                            {word}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Right Column: Empty (for now) */}
            <div className={styles.rightColumn}>
                <HeroChat />
            </div>
        </section>
    );
}
