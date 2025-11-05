'use client'; // Must be client component for GSAP and hooks

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroChat from './HeroChat';

// Import our new CSS Module
import styles from './Hero.module.css';
import AnimatedText from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

// The headline text
const headline =
    'Software Developer. I build engaging and intelligent digital experiences.';

export default function Hero() {
    const container = useRef(null);

    const chatColumnRef = useRef(null);

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
            ScrollTrigger.create({
                trigger: container.current, // The whole <section> is the trigger
                start: 'bottom 80%', // When the bottom of the hero is 80% from the top

                // When you scroll PAST this point (scrolling down)
                onEnter: () =>
                    gsap.to(chatColumnRef.current, {
                        autoAlpha: 0, // Fades out and sets visibility: hidden
                        y: 30, // Moves it down 30px
                        duration: 0.5,
                        ease: 'power2.out',
                    }),

                // When you scroll BACK UP past this point
                onLeaveBack: () =>
                    gsap.to(chatColumnRef.current, {
                        autoAlpha: 1, // Fades back in
                        y: 0, // Returns to original position
                        duration: 0.5,
                        ease: 'power2.out',
                    }),
            });
        },
        { scope: container },
    ); // Scope the animation to this component

    return (
        <section
            ref={container}
            id="hero-section"
            className={styles.heroSection}
        >
            {/* Left Column: Text */}
            <div className={styles.leftColumn}>
                <p className={styles.howdy}>👋 Hi, I'm Arturo Gamez</p>
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
                <AnimatedText triggerRef={container} animDuration={0.4}>
                    <p className={styles.subtitle}>
                        You're in my digital workshop. Explore my projects or
                        ask my AI assistant about me and my work.
                    </p>
                </AnimatedText>
            </div>

            {/* Right Column: Empty (for now) */}
            <div className={styles.rightColumn} ref={chatColumnRef}>
                <HeroChat />
            </div>
        </section>
    );
}
