'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import our new CSS Module
import styles from './Header.module.css';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '../navigation';
import { locales } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const headerRef = useRef(null);

    const t = useTranslations('Navigation');
    const locale = useLocale(); // This tells us the current locale (e.g., "en")
    const pathname = usePathname(); // This is the value that was buggy (e.g., "/es", "/fr", or "/")

    // This logic is safer and doesn't use useLocale()
    let cleanPathname = pathname;

    // We check against ALL locales, not just the current one
    for (const lang of locales) {
        const prefix = `/${lang}`;
        if (pathname.startsWith(prefix)) {
            // Found a prefix (e.g., "/es/projects" starts with "/es")
            cleanPathname = pathname.slice(prefix.length); // Slices it to "/projects"
            break; // Stop looping
        }
    }

    // If the path was just "/es", slicing it leaves "",
    // so we set it to "/"
    if (cleanPathname === '') {
        cleanPathname = '/';
    }

    // GSAP animation logic
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
                        {t('home')}
                    </Link>
                    <Link href="/#about" className={styles.navLink}>
                        {t('about')}
                    </Link>
                    <Link href="/#projects" className={styles.navLink}>
                        {t('projects')}
                    </Link>
                    <Link href="/#contact" className={styles.navLink}>
                        {t('contact')}
                    </Link>
                </nav>

                {/* Right Side: Language Links */}
                <div className={styles.links}>
                    {locales.map((lang) => (
                        <Link
                            key={lang}
                            // 1. Pass the clean pathname to href
                            href={cleanPathname}
                            // 2. Pass the target language to the 'locale' prop
                            locale={lang}
                            className={`${styles.link} ${
                                locale === lang ? styles.active : ''
                            }`}
                        >
                            {lang.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
