"use client";

import { useRef, useState, useEffect, FormEvent } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./FloatingChat.module.css";
import heroChatStyles from "./HeroChat.module.css";

import { useChatState, useChatAPI } from "@/context/ChatContext";

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

// Reusamos los estilos del 'heroChatStyles'
const TypingIndicator = () => (
    <div className={heroChatStyles.aiMessage}>
        <strong>Arturo-AI:</strong>
        <div className={heroChatStyles.typingIndicator}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default function FloatingChat() {
    const { messages, isLoading, isOpen, contextualQuestions } = useChatState();
    const { toggleChat, sendMessage } = useChatAPI();

    const [input, setInput] = useState("");

    const desktopRef = useRef(null);
    const mobileRef = useRef(null);
    const openChatRef = useRef(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isLoading) {
            // Wait 10ms for the input to re-enable, then focus
            const timeoutId = setTimeout(() => {
                inputRef.current?.focus();
            }, 10);
            return () => clearTimeout(timeoutId);
        }
    }, [isLoading]);

    useGSAP(() => {
        // --- This is the "SLIDE-IN/OUT" logic ---
        // This part is now "state-aware" of the scroll.
        if (isOpen) {
            // Animate IN (slide from right)
            gsap.to(openChatRef.current, {
                autoAlpha: 1,
                xPercent: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            // Animate OUT (slide to right)
            gsap.to(openChatRef.current, {
                autoAlpha: 0,
                xPercent: 100,
                duration: 0.3,
                ease: "power3.in",
            });
        }

        // --- This is the "SCROLL-TRIGGER" logic ---
        // It's all inside the same hook, so they work together.
        const targets = [desktopRef.current, mobileRef.current];
        const openTarget = openChatRef.current;
        let st: globalThis.ScrollTrigger | null = null;

        const timer = setTimeout(() => {
            st = ScrollTrigger.create({
                trigger: "#hero-section",
                start: "bottom 78%",

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
            trigger: "#hero-section",
            start: "bottom 70%",
            onEnter: () => {
                toggleChat(true);
            },
        });
    }, []);
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#hero-section",
            start: "bottom 70%",
            onLeaveBack: () => {
                toggleChat(false);
            },
        });
    }, [toggleChat]);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    //HandleSend (copiado de HeroChat)
    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        sendMessage(input);
        setInput("");
    };

    // Handle para botones de preguntas
    const handleContextualClick = (question: string) => {
        if (isLoading) return; // No hacer nada si ya está cargando
        sendMessage(question); // Envía la pregunta directamente
        // No limpiamos el input, por si el usuario estaba escribiendo
    };

    return (
        <>
            {/* --- DESKTOP VERSION --- */}
            {!isOpen && (
                <div
                    ref={desktopRef}
                    className={styles.floatingBar}
                    onClick={() => toggleChat()}
                >
                    <div style={{ cursor: "pointer" }}>
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
                    onClick={() => toggleChat()}
                >
                    <MobileArrowIcon />
                </div>
            )}

            {/* --- MOBILE VERSION --- */}
            <div ref={openChatRef} className={styles.openChatWindow}>
                <div className={styles.openChatHeader}>
                    <span className={styles.openChatTitle}>Arturo AI</span>
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleChat()}
                    >
                        {" "}
                        <MinimizeIcon />
                    </div>
                </div>
                <div className={styles.openChatBody} ref={messageListRef}>
                    {/* Mensaje de bienvenida estático */}
                    <div className={heroChatStyles.aiMessage}>
                        <strong>Arturo-AI:</strong>
                        <p>
                            Hi! I'm Arturo's digital assistant. How can I help?
                        </p>
                    </div>

                    {/* Historial de chat dinámico */}
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            // Reusamos los estilos de HeroChat
                            className={
                                msg.role === "user"
                                    ? heroChatStyles.userMessage
                                    : heroChatStyles.aiMessage
                            }
                        >
                            {msg.role === "user" ? (
                                <>
                                    <span className={heroChatStyles.userPrompt}>
                                        &gt;
                                    </span>
                                    <span className={heroChatStyles.userText}>
                                        {msg.content}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <strong>Arturo-AI:</strong>
                                    <p>{msg.content}</p>
                                </>
                            )}
                        </div>
                    ))}

                    {/* Indicador de "escribiendo..." */}
                    {isLoading && <TypingIndicator />}
                </div>

                {/* --- NUEVO: Sección de Preguntas Contextuales --- */}
                <div className={styles.contextualQuestions}>
                    {contextualQuestions.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => handleContextualClick(q)}
                            className={styles.questionButton}
                            disabled={isLoading}
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* --- NUEVO: Formulario de Input (copiado de HeroChat) --- */}
                <form className={styles.inputArea} onSubmit={handleSend}>
                    <span className={styles.promptSymbol}>&gt;</span>
                    <input
                        type="text"
                        placeholder="Ask a question..."
                        className={styles.textInput}
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                    />
                    <button type="submit" className={styles.sendButton}>
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}
