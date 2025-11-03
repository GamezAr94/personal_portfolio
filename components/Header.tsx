'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import our new CSS Module
import styles from './Header.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const headerRef = useRef(null);

    // GSAP animation logic - THIS REMAINS THE SAME
    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    const { direction } = self;
                    if (direction === -1) {
                        // Scrolling Up
                        gsap.to(headerRef.current, {
                            // We animate 'transform' (yPercent) just as before
                            yPercent: 0,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    } else {
                        // Scrolling Down
                        if (self.scroll() > 100) {
                            gsap.to(headerRef.current, {
                                yPercent: -100,
                                duration: 0.3,
                                ease: 'power2.out',
                            });
                        }
                    }
                },
            });
        },
        { scope: headerRef },
    );

    return (
        // We replace Tailwind classes with our CSS Module classes
        <header ref={headerRef} className={styles.header}>
            <nav className={styles.nav}>
                {/* Left Side: Name */}
                <Link href="/" className={styles.logo}>
                    Arturo Gamez
                </Link>

                <nav className={styles.mainNav}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link href="/#about" className={styles.navLink}>
                        About
                    </Link>
                    <Link href="/#projects" className={styles.navLink}>
                        Projects
                    </Link>
                    <Link href="/#contact" className={styles.navLink}>
                        Contact
                    </Link>
                </nav>

                {/* Right Side: Language Links */}
                <div className={styles.links}>
                    <Link
                        href="/"
                        className={`${styles.link} ${styles.active}`}
                    >
                        EN
                    </Link>
                    <Link href="/" className={styles.link}>
                        ES
                    </Link>
                    <Link href="/" className={styles.link}>
                        FR
                    </Link>
                </div>
            </nav>
        </header>
    );
}
