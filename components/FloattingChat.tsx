'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './FloatingChat.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingChat() {
    const buttonRef = useRef(null);

    useGSAP(
        () => {
            // ADD THIS 'setTimeout' WRAPPER:
            // This delays the animation setup until the *next tick*,
            // giving React time to render the '#hero-section'
            const timer = setTimeout(() => {
                ScrollTrigger.create({
                    trigger: '#hero-section',
                    start: 'bottom 80%',

                    onEnter: () => {
                        console.log('Floating Button: Show'); // Good for testing
                        gsap.to(buttonRef.current, { autoAlpha: 1 });
                    },

                    onLeaveBack: () => {
                        console.log('Floating Button: Hide'); // Good for testing
                        gsap.to(buttonRef.current, { autoAlpha: 0 });
                    },
                });
            }, 100); // Wait 100ms, just to be safe.

            // This is important: clear the timer if the component unmounts
            return () => clearTimeout(timer);
        },
        { scope: buttonRef },
    );

    return (
        <div ref={buttonRef} className={styles.floatingButton}>
            <span style={{ color: 'white', fontSize: '24px', margin: 'auto' }}>
                AI
            </span>
        </div>
    );
}
