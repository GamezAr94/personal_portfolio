'use client';

import React from 'react';
import { useChatState, useChatAPI } from '@/context/ChatContext';
import { useTranslations } from 'next-intl';

// 1. Definimos el ícono aquí mismo para que el componente sea autocontenido
const AiIcon = () => (
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
    >
        <path d="M12 2L14.39 8.39L21 10.39L16.39 14.39L17.61 21L12 17.61L6.39 21L7.61 14.39L3 10.39L9.61 8.39L12 2z" />
    </svg>
);

// 2. Definimos los Props que aceptará el botón
type AskAiButtonProps = {
    // La clave i18n para la PREGUNTA (ej. "q_projects_ch1_1")
    questionKey: string;

    // El 'className' que le pasará el componente padre (ej. styles.aiAskButton)
    className: string;

    // (Opcional) El 'namespace' para el texto del botón
    textNamespace?: string;

    // (Opcional) La clave i18n para el TEXTO del botón
    textKey?: string;
};

const AskAiButton: React.FC<AskAiButtonProps> = ({
    questionKey,
    className,
    textNamespace = 'ProjectChapters',
    textKey = 'aiButton',
}) => {
    const t_chat = useTranslations('ChatQuestions');
    const t_btn = useTranslations(textNamespace);

    // --- 2. USA LOS DOS HOOKS ---
    const { isLoading } = useChatState(); // Obtenemos el estado
    const { sendMessage, toggleChat } = useChatAPI(); // Obtenemos las funciones

    // La lógica del clic no cambia, ¡pero ahora es segura!
    const handleClick = () => {
        if (isLoading) return;

        const question = t_chat(questionKey);
        sendMessage(question);
        toggleChat(true);
    };

    return (
        <button
            className={className}
            onClick={handleClick}
            disabled={isLoading} // Sigue funcionando igual
        >
            <AiIcon />
            {t_btn(textKey)}
        </button>
    );
};

export default AskAiButton;
