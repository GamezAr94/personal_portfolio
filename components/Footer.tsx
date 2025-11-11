'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Footer.module.css';

import { useTranslations } from 'next-intl';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

gsap.registerPlugin(ScrollTrigger);

// --- Component Props ---
type FooterProps = {
    githubUrl: string;
    linkedinUrl: string;
};

const Footer: React.FC<FooterProps> = ({ githubUrl, linkedinUrl }) => {
    const t = useTranslations('Footer');

    const footerRef = useRef<HTMLElement>(null);
    const copyrightYear = new Date().getFullYear();

    // State for the contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // For success/error messages

    // Usamos un nombre engañoso para el bot, como si fuera un "asunto"
    const [subjectLine, setSubjectLine] = useState('');

    const { executeRecaptcha } = useGoogleReCaptcha();

    // GSAP Animation
    useEffect(() => {
        const el = footerRef.current;
        if (el) {
            const ctx = gsap.context(() => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'restart pause resume pause',
                    },
                });
            }, el);

            // Cleanup
            return () => ctx.revert();
        }
    }, []);

    // Form submission handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus(t('form_status_sending'));

        // --- Verificación de reCaptcha ---
        if (!executeRecaptcha) {
            console.error('reCaptcha hook no está listo');
            setStatus(t('form_status_error'));
            return;
        }

        // Genera el token solo cuando el usuario envía
        const token = await executeRecaptcha('contactForm');

        // This is where you'll send the data to your Next.js API route
        // Example: /api/contact
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    honeypot: subjectLine,
                    token,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Éxito
                setStatus(t('form_status_success'));
                setName('');
                setEmail('');
                setMessage('');
                setSubjectLine('');
            } else {
                // Error del servidor o de reCaptcha
                console.error('Error del servidor:', data.error);
                setStatus(t('form_status_error'));
            }
        } catch (error) {
            // On error
            setStatus(t('form_status_error'));
        }
    };

    return (
        <footer className={styles.contactContainer} ref={footerRef}>
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>

            {/* --- New Contact Form --- */}
            <form
                id="contact"
                className={styles.contactForm}
                onSubmit={handleSubmit}
            >
                <div className={styles.honeypotField}>
                    <label htmlFor="subject_line">Subject</label>
                    <input
                        type="text"
                        id="subject_line"
                        name="subject_line"
                        value={subjectLine}
                        onChange={(e) => setSubjectLine(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="name">{t('form_name')}</label>{' '}
                    <input
                        type="text"
                        id="name"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">{t('form_email')}</label>{' '}
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">{t('form_message')}</label>{' '}
                    <textarea
                        id="message"
                        className={styles.textarea}
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                {/* Submit button uses .ctaButton styles */}
                <button type="submit" className={styles.ctaButton}>
                    {t('form_button')}{' '}
                </button>

                {status && <p className={styles.formStatus}>{status}</p>}
            </form>

            <div className={styles.footerSocials}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>

            <div className={styles.footerCopyright}>
                © {copyrightYear} Arturo Gamez. {t('copyright')}
            </div>
        </footer>
    );
};

export default Footer;
