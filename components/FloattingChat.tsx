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
        // --- This is the "SLIDE-IN/OUT" logic ---
        // This part is now "state-aware" of the scroll.
        if (isOpen) {
            // Animate IN (slide from right)
            gsap.to(openChatRef.current, {
                autoAlpha: 1,
                xPercent: 0,
                duration: 0.4,
                ease: 'power3.out',
            });
        } else {
            // Animate OUT (slide to right)
            gsap.to(openChatRef.current, {
                autoAlpha: 0,
                xPercent: 100,
                duration: 0.3,
                ease: 'power3.in',
            });
        }

        // --- This is the "SCROLL-TRIGGER" logic ---
        // It's all inside the same hook, so they work together.
        const targets = [desktopRef.current, mobileRef.current];
        const openTarget = openChatRef.current;
        let st: globalThis.ScrollTrigger | null = null;

        const timer = setTimeout(() => {
            st = ScrollTrigger.create({
                trigger: '#hero-section',
                start: 'bottom 78%',

                // 3. This tells ScrollTrigger to run the onLeaveBack
                // check IMMEDIATELY on load.
                immediateRender: true,

                onEnter: () => {
                    // When scrolling DOWN
                    if (isOpen) {
                        gsap.to(openTarget, { autoAlpha: 1 });
                    } else {
                        gsap.to(targets, { autoAlpha: 1 });
                    }
                },
                onLeaveBack: () => {
                    // When scrolling UP
                    if (isOpen) {
                        gsap.to(openTarget, { autoAlpha: 0, duration: 0 });
                    } else {
                        gsap.to(targets, { autoAlpha: 0, duration: 0 });
                    }
                },
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (st) st.kill();
        };
    }, [isOpen]);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#hero-section',
            start: 'bottom 70%',
            onEnter: () => {
                setIsOpen(true);
            },
        });
    }, []);
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#hero-section',
            start: 'bottom 70%',
            onLeaveBack: () => {
                setIsOpen(false);
            },
        });
    }, []);

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
