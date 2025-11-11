'use client';

// Añade 'useEffect' y 'useRef' a tus imports de React
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

// --- Un SVG de checkmark para el mensaje de éxito ---
const SuccessIcon = () => (
    <svg
        className={styles.successIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const Footer: React.FC<FooterProps> = ({ githubUrl, linkedinUrl }) => {
    const t = useTranslations('Footer');

    const footerRef = useRef<HTMLElement>(null);
    const copyrightYear = new Date().getFullYear();

    // --- 1. Añade dos Refs: uno para el formulario y otro para el mensaje de éxito ---
    const formRef = useRef<HTMLFormElement>(null);
    const successRef = useRef<HTMLDivElement>(null);

    // State for the contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // For success/error messages

    const [subjectLine, setSubjectLine] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    // GSAP Animation
    useEffect(() => {
        // ... tu animación de GSAP para el 'footerRef' sigue igual ...
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
            return () => ctx.revert();
        }
    }, []);

    // --- 2. Añade un useEffect para reaccionar a los cambios de 'status' ---
    useEffect(() => {
        const formEl = formRef.current;
        const successEl = successRef.current;
        if (!formEl || !successEl) return;

        // Si el estado es 'success'
        if (status === t('form_status_success')) {
            // Anima la salida del formulario y la entrada del mensaje de éxito
            gsap.timeline()
                .to(formEl, { autoAlpha: 0, duration: 0.4, ease: 'power2.in' })
                .set(formEl, { display: 'none' }) // Oculta el form completamente
                .set(successEl, { display: 'flex' }) // Muestra el div de éxito
                .to(successEl, {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                });

            // Si el estado vuelve a estar vacío (para "enviar otro mensaje")
        } else if (status === '') {
            // Hacemos la animación inversa
            gsap.timeline()
                .to(successEl, {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power2.in',
                })
                .set(successEl, { display: 'none' })
                .set(formEl, { display: 'flex' }) // 'flex' porque es el display original
                .to(formEl, {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                });
        }
    }, [status, t]); // Se ejecuta cada vez que 'status' cambia

    // --- 3. Crea una función para resetear el formulario ---
    const handleResetForm = () => {
        setStatus(''); // Esto disparará el useEffect para mostrar el form de nuevo
    };

    // Form submission handler (sin cambios en la lógica de 'fetch')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(t('form_status_sending'));

        if (!executeRecaptcha) {
            console.error('reCaptcha hook no está listo');
            setStatus(t('form_status_error'));
            return;
        }
        const token = await executeRecaptcha('contactForm');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                // ... el resto de tu 'fetch' sigue igual ...
                headers: { 'Content-Type': 'application/json' },
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
                setStatus(t('form_status_success')); // <-- Esto dispara la animación
                setName('');
                setEmail('');
                setMessage('');
                setSubjectLine('');
            } else {
                console.error('Error del servidor:', data.error);
                setStatus(t('form_status_error'));
            }
        } catch (error) {
            console.error('Error de red:', error);
            setStatus(t('form_status_error'));
        }
    };

    return (
        <footer className={styles.contactContainer} ref={footerRef}>
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>

            {/* --- 4. Añade el 'ref' al formulario --- */}
            <form
                id="contact"
                className={styles.contactForm}
                onSubmit={handleSubmit}
                ref={formRef}
            >
                {/* ... todos tus inputs (honeypot, name, email, message) ... */}
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

                {/* --- 5. Lógica actualizada del botón y status --- */}
                <button
                    type="submit"
                    className={styles.ctaButton}
                    disabled={status === t('form_status_sending')} // Deshabilita mientras envía
                >
                    {/* Muestra "Enviando..." en el botón */}
                    {status === t('form_status_sending')
                        ? t('form_status_sending')
                        : t('form_button')}
                </button>

                {/* Muestra solo el mensaje de ERROR aquí */}
                {status === t('form_status_error') && (
                    <p className={styles.formStatusError}>
                        {t('form_status_error')}
                    </p>
                )}
            </form>

            {/* --- 6. Añade el nuevo contenedor de ÉXITO --- */}
            <div className={styles.successMessageContainer} ref={successRef}>
                <SuccessIcon />
                <h3 className={styles.successTitle}>
                    {t('form_status_success')}
                </h3>
                <p className={styles.successSubtitle}>{t('subtitle')}</p>{' '}
                {/* Reutilizamos el subtítulo */}
                <button
                    type="button"
                    className={styles.ctaButton} // Reutilizamos el estilo del botón
                    onClick={handleResetForm}
                >
                    Enviar otro mensaje
                </button>
            </div>

            <div className={styles.footerSocials}>
                {/* ... tus links sociales ... */}
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

            <div className={styles.recaptchaNotice}>
                {t.rich('recaptchaNotice', {
                    privacyLink: (chunks) => (
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {chunks}
                        </a>
                    ),
                    termsLink: (chunks) => (
                        <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {chunks}
                        </a>
                    ),
                })}
            </div>
        </footer>
    );
};

export default Footer;
