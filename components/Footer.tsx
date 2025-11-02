'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

// --- Component Props ---
type FooterProps = {
    githubUrl: string;
    linkedinUrl: string;
};

const Footer: React.FC<FooterProps> = ({ githubUrl, linkedinUrl }) => {
    const footerRef = useRef<HTMLElement>(null);
    const copyrightYear = new Date().getFullYear();

    // State for the contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // For success/error messages

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
        setStatus('Sending...');

        // This is where you'll send the data to your Next.js API route
        // Example: /api/contact
        try {
            // ** SIMULATED API CALL for the prototype **
            // In production, you'd 'await fetch(...)' here
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // On success
            setStatus('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            // On error
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <footer className={styles.contactContainer} ref={footerRef}>
            <h2>Get in Touch</h2>
            <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities. Feel free to reach out.
            </p>

            {/* --- New Contact Form --- */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="message">Message</label>
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
                    Send Message
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
                © {copyrightYear} Arturo Gamez. Built with playful energy.
            </div>
        </footer>
    );
};

export default Footer;
