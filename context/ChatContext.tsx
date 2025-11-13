// context/ChatContext.tsx
'use client';

// IMPORTANTE: ¡Añade useCallback!
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
    useMemo,
} from 'react';

// --- 1. Definimos los tipos de datos (SIN CAMBIOS) ---
export interface ChatMessage {
    role: 'user' | 'ai';
    content: string;
}

// --- 2. SEPARAMOS LOS TIPOS DE ESTADO Y DE API ---

// Tipo para el ESTADO (datos que cambian)
export interface ChatState {
    messages: ChatMessage[];
    isOpen: boolean;
    isLoading: boolean;
    contextualQuestions: string[];
}

// Tipo para la API (funciones que NO cambian)
export interface ChatAPI {
    toggleChat: (open?: boolean) => void;
    sendMessage: (message: string) => Promise<void>;
    setContextualQuestions: (questions: string[]) => void;
}

// --- 3. CREAMOS DOS CONTEXTOS ---
export const ChatStateContext = createContext<ChatState | undefined>(undefined);
export const ChatAPIContext = createContext<ChatAPI | undefined>(undefined);

// --- 4. ACTUALIZAMOS EL PROVIDER ---
interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    // Los 'useState' siguen viviendo aquí, igual que antes
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [contextualQuestions, _setContextualQuestions] = useState<string[]>(
        [],
    );

    // --- 5. ENVOLVEMOS TODAS LAS FUNCIONES CON 'useCallback' ---
    // Esto garantiza que sus referencias no cambien entre re-renders.

    const toggleChat = useCallback((open?: boolean) => {
        setIsOpen((prev) => (open !== undefined ? open : !prev));
    }, []); // Dependencia vacía = nunca cambia

    const sendMessage = useCallback(async (content: string) => {
        // Usamos 'setIsLoading' y 'setMessages' en modo de función
        // para que 'sendMessage' no necesite depender de 'isLoading' o 'messages'.
        setIsLoading(true);
        const userMessage: ChatMessage = { role: 'user', content };
        setMessages((prev) => [...prev, userMessage]);

        // Mock API call (igual que antes)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const aiResponse: ChatMessage = {
            role: 'ai',
            content: `Respuesta de prueba para: "${content}"`,
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
    }, []); // Dependencia vacía = nunca cambia

    const setContextualQuestions = useCallback(
        (questions: string[]) => {
            _setContextualQuestions(questions);
        },
        [_setContextualQuestions],
    ); // Dependencia vacía = nunca cambia

    // --- 6. SEPARAMOS LOS VALORES PARA CADA PROVIDER ---
    const stateValue = useMemo(
        () => ({
            messages,
            isOpen,
            isLoading,
            contextualQuestions,
        }),
        [messages, isOpen, isLoading, contextualQuestions],
    );

    const apiValue = useMemo(
        () => ({
            toggleChat,
            sendMessage,
            setContextualQuestions,
        }),
        [toggleChat, sendMessage, setContextualQuestions],
    );

    // --- 7. ANIDAMOS LOS DOS PROVIDERS ---
    return (
        <ChatAPIContext.Provider value={apiValue}>
            <ChatStateContext.Provider value={stateValue}>
                {children}
            </ChatStateContext.Provider>
        </ChatAPIContext.Provider>
    );
};

// --- 8. CREAMOS DOS HOOKS SEPARADOS ---
export const useChatState = () => {
    const context = useContext(ChatStateContext);
    if (context === undefined) {
        throw new Error(
            'useChatState debe ser usado dentro de un ChatProvider',
        );
    }
    return context;
};

export const useChatAPI = () => {
    const context = useContext(ChatAPIContext);
    if (context === undefined) {
        throw new Error('useChatAPI debe ser usado dentro de un ChatProvider');
    }
    return context;
};
