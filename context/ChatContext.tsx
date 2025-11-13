// context/ChatContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos los tipos de datos

// Tipo para un solo mensaje
export interface ChatMessage {
    role: 'user' | 'ai';
    content: string;
}

// Tipo para todo el estado del contexto
export interface ChatContextState {
    messages: ChatMessage[];
    isOpen: boolean; // ¿Está abierta la ventana del chat lateral?
    isLoading: boolean; // ¿Está el AI "pensando"?
    contextualQuestions: string[]; // Las preguntas de ejemplo

    // Funciones que los componentes pueden llamar
    toggleChat: (open?: boolean) => void;
    sendMessage: (message: string) => Promise<void>;
    setContextualQuestions: (questions: string[]) => void;
}

// Creamos el Context
// Lo creamos con un valor 'undefined' por defecto.
// Daremos un error si se intenta usar fuera del Provider.
export const ChatContext = createContext<ChatContextState | undefined>(
    undefined,
);

// Este componente envolverá nuestra app y contendrá toda la lógica.

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [contextualQuestions, setContextualQuestions] = useState<string[]>(
        [],
    );

    const toggleChat = (open?: boolean) => {
        // Si se pasa un valor (true/false), úsalo.
        // Si no, simplemente invierte el valor actual.
        setIsOpen((prev) => (open !== undefined ? open : !prev));
    };

    const sendMessage = async (content: string) => {
        if (isLoading) return; // No enviar si ya está cargando

        // Añade el mensaje del usuario al historial
        const userMessage: ChatMessage = { role: 'user', content };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        // Aquí es donde llamaremos a nuestra API real
        // Por ahora, solo simulamos una respuesta de la IA.
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula 1.5s de espera

        const aiResponse: ChatMessage = {
            role: 'ai',
            content: `Respuesta de prueba para: "${content}"`,
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
        // --- FIN DE LA LÓGICA MOCK ---
    };

    // El valor que proveeremos a todos los componentes hijos
    const value = {
        messages,
        isOpen,
        isLoading,
        contextualQuestions,
        toggleChat,
        sendMessage,
        setContextualQuestions,
    };

    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    );
};

// --- 4. Creamos un Hook personalizado ---
// Esto hace que sea más fácil usar el contexto sin tener que
// importar 'useContext' y 'ChatContext' en cada archivo.
export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat debe ser usado dentro de un ChatProvider');
    }
    return context;
};
