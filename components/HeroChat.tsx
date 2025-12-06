"use client";

import React, { useState, FormEvent, useRef, useEffect } from "react";
import { useChatState, useChatAPI } from "@/context/ChatContext";
import AsciiArtTitle from "./AsciiArtTitle";
// We just import the new styles. The name is the same.
import styles from "./HeroChat.module.css";
import { useTranslations } from "next-intl";

const TypingIndicator = () => (
    <div className={styles.aiMessage}>
        <strong>Arturo-AI:</strong>
        <div className={styles.typingIndicator}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default function HeroChat() {
    // Obtenemos el estado y las funciones de nuestro "cerebro" global
    const { messages, isLoading } = useChatState();
    const { sendMessage } = useChatAPI();
    const t = useTranslations("HeroChat");
    const suggestionKeys = ["suggestion_1", "suggestion_2", "suggestion_3"];

    // Esto controla lo que el usuario está escribiendo
    const [input, setInput] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    // Esto nos da una referencia al DIV que contiene los mensajes
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

    useEffect(() => {
        if (messageListRef.current) {
            // Hacemos scroll hasta el fondo cada vez que 'messages' cambia
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight;
        }
    }, [messages, isLoading]); // Se activa si llegan mensajes nuevos o si empieza a escribir

    const handleSend = (e: FormEvent) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el form
        if (!input.trim() || isLoading) return; // No enviar vacío o si ya está cargando

        sendMessage(input); // Llama a la función del contexto global
        setInput(""); // Limpia el input local
    };

    const handleSuggestionClick = (text: string) => {
        if (isLoading) return;
        sendMessage(text);
    };

    const handleContainerClick = () => {
        // UX Improvement: Only focus if the user isn't trying to highlight/select text to copy.
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) return;

        inputRef.current?.focus();
    };

    return (
        <div className={styles.terminalWindow} onClick={handleContainerClick}>
            {/* Terminal Header */}
            <div className={styles.terminalHeader}>
                <div className={`${styles.trafficLight} ${styles.red}`}></div>
                <div
                    className={`${styles.trafficLight} ${styles.yellow}`}
                ></div>
                <div className={`${styles.trafficLight} ${styles.green}`}></div>
            </div>

            {/* The Message List */}
            <div className={styles.messageList} ref={messageListRef}>
                {/* The ASCII Art */}
                <AsciiArtTitle title="ARTIC" />

                {/* AI Message */}
                <div className={styles.aiMessage}>
                    <strong>Arturo-AI:</strong>
                    {/* 1. Main Greeting */}
                    <p>{t("ai_greeting")}</p>

                    {/* 2. Context Warning / System Note */}
                    <p className={styles.systemNote}>{t("system_note")}</p>

                    {/* 3. Suggestions (Only shown if history is empty) */}
                    {messages.length === 0 && (
                        <div className={styles.suggestionList}>
                            {suggestionKeys.map((key) => (
                                <button
                                    key={key}
                                    className={styles.suggestionButton}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSuggestionClick(t(key));
                                    }}
                                    disabled={isLoading}
                                >
                                    {t(key)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* User Message */}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            msg.role === "user"
                                ? styles.userMessage
                                : styles.aiMessage
                        }
                    >
                        {msg.role === "user" ? (
                            <>
                                <span className={styles.userPrompt}>&gt;</span>
                                <span className={styles.userText}>
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

                {/* --- NUEVO: Muestra el indicador de "escribiendo..." --- */}
                {isLoading && <TypingIndicator />}
            </div>

            {/* Input Bar */}
            {/* Usamos un <form> para que 'Enter' funcione automáticamente */}
            <form className={styles.inputArea} onSubmit={handleSend}>
                <span className={styles.promptSymbol}>&gt;</span>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder={t("input_placeholder")}
                    className={styles.textInput}
                    value={input} // Controlado por React
                    onChange={(e) => setInput(e.target.value)} // Actualiza el estado
                    disabled={isLoading} // Deshabilita el input mientras la IA responde
                    maxLength={30}
                />
                {/* El botón ahora es de tipo "submit" */}
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}
