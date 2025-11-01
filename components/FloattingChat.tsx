'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './FloatingChat.module.css';

gsap.registerPlugin(ScrollTrigger);

// (We put these here so we don't need new files)
const ArrowIcon = () => (
    <svg
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
    </svg>
);
const ChatIcon = () => (
    <svg
        className={styles.chatIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
    </svg>
);
const MobileArrowIcon = () => (
    <svg
        className={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
    >
        <path
            d="M10.75 3.75L5.25 9L10.75 14.25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function FloatingChat() {
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);
    useGSAP(() => {
        const targets = [desktopRef.current, mobileRef.current];
        // ADD THIS 'setTimeout' WRAPPER:
        // This delays the animation setup until the *next tick*,
        // giving React time to render the '#hero-section'
        const timer = setTimeout(() => {
            ScrollTrigger.create({
                trigger: '#hero-section',
                start: 'bottom 80%',

                onEnter: () =>
                    gsap.to(targets, { autoAlpha: 1, duration: 0.3 }),
                onLeaveBack: () =>
                    gsap.to(targets, { autoAlpha: 0, duration: 0.3 }),
            });
        }, 100); // Wait 100ms, just to be safe.

        // This is important: clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* --- DESKTOP VERSION --- */}
            <div
                ref={desktopRef} // 5. Assign desktop ref
                className={styles.floatingBar}
            >
                <div style={{ cursor: 'pointer' }}>
                    <ArrowIcon />
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <ChatIcon />
                </div>
                <div></div> {/* Spacer */}
            </div>

            {/* --- MOBILE VERSION --- */}
            <div
                ref={mobileRef} // 6. Assign mobile ref
                className={styles.mobileTab}
            >
                <MobileArrowIcon />
            </div>
        </>
    );
}
