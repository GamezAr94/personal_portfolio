'use client';

import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { useChat } from '@/context/ChatContext';

import AsciiArtTitle from './AsciiArtTitle';
// We just import the new styles. The name is the same.
import styles from './HeroChat.module.css';

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
    const { messages, isLoading, sendMessage } = useChat();

    // Esto controla lo que el usuario está escribiendo
    const [input, setInput] = useState('');

    // Esto nos da una referencia al DIV que contiene los mensajes
    const messageListRef = useRef<HTMLDivElement>(null);

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
        setInput(''); // Limpia el input local
    };

    return (
        <div className={styles.terminalWindow}>
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
                    <p>
                        Hi there! I'm Arturo's digital assistant. You can ask me
                        anything about Arturo and his projects.
                    </p>
                </div>

                {/* User Message */}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            msg.role === 'user'
                                ? styles.userMessage
                                : styles.aiMessage
                        }
                    >
                        {msg.role === 'user' ? (
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
                    placeholder="Ask about a project..."
                    className={styles.textInput}
                    value={input} // Controlado por React
                    onChange={(e) => setInput(e.target.value)} // Actualiza el estado
                    disabled={isLoading} // Deshabilita el input mientras la IA responde
                />
                {/* El botón ahora es de tipo "submit" */}
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}
