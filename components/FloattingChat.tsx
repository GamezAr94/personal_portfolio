'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './FloatingChat.module.css';

gsap.registerPlugin(ScrollTrigger);

// (We put these here so we don't need new files)
const MaximizeIcon = () => (
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
        className={styles.icon}
    >
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" x2="14" y1="3" y2="10"></line>
        <line x1="3" x2="10" y1="21" y2="14"></line>
    </svg>
);

// 3. ADD your new 'Minimize2' (Close) icon
const MinimizeIcon = () => (
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
        className={styles.icon}
    >
        <polyline points="4 14 10 14 10 20"></polyline>
        <polyline points="20 10 14 10 14 4"></polyline>
        <line x1="14" x2="21" y1="10" y2="3"></line>
        <line x1="3" x2="10" y1="21" y2="14"></line>
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
    const [isOpen, setIsOpen] = useState(false);

    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    const openChatRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    useGSAP(() => {
        const targets = [desktopRef.current, mobileRef.current];
        const openTarget = openChatRef.current; // Get the open chat ref
        let st: globalThis.ScrollTrigger | null = null;

        const timer = setTimeout(() => {
            // We'll create the trigger...
            st = ScrollTrigger.create({
                trigger: '#hero-section',
                start: 'bottom 80%',

                // When scrolling DOWN (past hero)
                onEnter: () => {
                    // CHECK THE STATE:
                    if (isOpen) {
                        // If chat is open, show the OPEN window
                        gsap.to(openTarget, { autoAlpha: 1, duration: 0.3 });
                    } else {
                        // If chat is closed, show the CLOSED buttons
                        gsap.to(targets, { autoAlpha: 1, duration: 0.3 });
                    }
                },

                // When scrolling UP (back to hero)
                onLeaveBack: () => {
                    // CHECK THE STATE:
                    if (isOpen) {
                        // If chat is open, hide the OPEN window
                        gsap.to(openTarget, { autoAlpha: 0, duration: 0.3 });
                    } else {
                        // If chat is closed, hide the CLOSED buttons
                        gsap.to(targets, { autoAlpha: 0, duration: 0.3 });
                    }
                },
            });
            // --- END OF MODIFICATION ---
        }, 100);

        // The cleanup function is now more important
        return () => {
            clearTimeout(timer);
            // We must kill the ScrollTrigger when the hook re-runs
            // to avoid memory leaks
            if (st) st.kill();
        };
    }, [isOpen]);

    useGSAP(() => {
        if (isOpen) {
            // If 'isOpen' is true, slide it IN (to 0%)
            gsap.to(openChatRef.current, {
                autoAlpha: 1, // Fade in
                xPercent: 0, // Slide to its final position
                duration: 0.4, // A little longer for a smoother feel
                ease: 'power3.out',
            });
        } else {
            // If 'isOpen' is false, slide it OUT (to 100%)
            gsap.to(openChatRef.current, {
                autoAlpha: 0, // Fade out
                xPercent: 100, // Slide off-screen
                duration: 0.3,
                ease: 'power3.in',
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* --- DESKTOP VERSION --- */}
            {!isOpen && (
                <div
                    ref={desktopRef}
                    className={styles.floatingBar}
                    onClick={toggleChat}
                >
                    <div style={{ cursor: 'pointer' }}>
                        <MaximizeIcon />
                    </div>
                    <div className={styles.mainIconContainer}>
                        <div className={styles.mainIconGradient}>
                            <span className={styles.mainIconLetter}>A</span>
                        </div>
                        <span className={styles.iconText}>AI Assistant</span>
                    </div>
                    <div></div>
                </div>
            )}

            {!isOpen && (
                <div
                    ref={mobileRef}
                    className={styles.mobileTab}
                    onClick={toggleChat}
                >
                    <MobileArrowIcon />
                </div>
            )}

            {/* --- MOBILE VERSION --- */}
            <div ref={openChatRef} className={styles.openChatWindow}>
                <div className={styles.openChatHeader}>
                    <span className={styles.openChatTitle}>Arturo AI</span>
                    <div style={{ cursor: 'pointer' }} onClick={toggleChat}>
                        <MinimizeIcon />
                    </div>
                </div>
                <div className={styles.openChatBody}>
                    <p>Chat messages will go here...</p>
                </div>
            </div>
        </>
    );
}
