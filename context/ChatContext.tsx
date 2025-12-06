// context/ChatContext.tsx
"use client";

// IMPORTANTE: ¡Añade useCallback!
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
    useMemo,
    useRef,
} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// --- Definimos los tipos de datos ---
export interface ChatMessage {
    role: "user" | "ai";
    content: string;
}

// --- SEPARAMOS LOS TIPOS DE ESTADO Y DE API ---

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
    sendMessage: (message: string, locale?: string) => Promise<void>;
    setContextualQuestions: (questions: string[]) => void;
}

// --- CREAMOS DOS CONTEXTOS ---
export const ChatStateContext = createContext<ChatState | undefined>(undefined);
export const ChatAPIContext = createContext<ChatAPI | undefined>(undefined);

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

    const { executeRecaptcha } = useGoogleReCaptcha();
    // Este ref guardará un valor honeypot falso, no es necesario un estado
    const honeypotRef = useRef("");

    // Esto garantiza que sus referencias no cambien entre re-renders.

    const toggleChat = useCallback((open?: boolean) => {
        setIsOpen((prev) => (open !== undefined ? open : !prev));
    }, []); // Dependencia vacía = nunca cambia

    const sendMessage = useCallback(
        async (content: string, locale: string = "en") => {
            // --- Seguridad: reCaptcha ---
            if (!executeRecaptcha) {
                console.error("Chat reCaptcha hook is not ready");
                // Podríamos mostrar un error, pero por ahora solo salimos
                return;
            }

            // Usamos 'setIsLoading' y 'setMessages' en modo de función
            // para que 'sendMessage' no necesite depender de 'isLoading' o 'messages'.
            setIsLoading(true);
            const userMessage: ChatMessage = { role: "user", content };
            setMessages((prev) => [...prev, userMessage]);

            try {
                // Genera el token JUSTO antes de enviar
                const token = await executeRecaptcha("chatSubmit");
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        content: content,
                        honeypot: honeypotRef.current, // Envía el valor del honeypot
                        token: token, // Envía el token de reCaptcha
                        locale: locale,
                    }),
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Éxito: usa la respuesta de la API
                    const aiResponse: ChatMessage = {
                        role: "ai",
                        content: data.message, // Usamos el mensaje de nuestra API
                    };
                    setMessages((prev) => [...prev, aiResponse]);
                } else {
                    // Error: muestra un mensaje de error en el chat
                    console.error("Error de la API de chat:", data.error);
                    const aiErrorResponse: ChatMessage = {
                        role: "ai",
                        content:
                            "Sorry, something went wrong. Please, try again latter.",
                    };
                    setMessages((prev) => [...prev, aiErrorResponse]);
                }
            } catch (error) {
                // Error de red
                console.error("Error de red en el chat:", error);
                const aiErrorResponse: ChatMessage = {
                    role: "ai",
                    content:
                        "Network error. Please, check your network connection or try again latter.",
                };
                setMessages((prev) => [...prev, aiErrorResponse]);
            } finally {
                // Pase lo que pase, deja de cargar
                setIsLoading(false);
            }
        },
        [executeRecaptcha],
    );

    const setContextualQuestions = useCallback(
        (questions: string[]) => {
            _setContextualQuestions(questions);
        },
        [_setContextualQuestions],
    );

    // --- SEPARAMOS LOS VALORES PARA CADA PROVIDER ---
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

    // --- ANIDAMOS LOS DOS PROVIDERS ---
    return (
        <ChatAPIContext.Provider value={apiValue}>
            <ChatStateContext.Provider value={stateValue}>
                {children}
            </ChatStateContext.Provider>
        </ChatAPIContext.Provider>
    );
};

// --- CREAMOS DOS HOOKS SEPARADOS ---
export const useChatState = () => {
    const context = useContext(ChatStateContext);
    if (context === undefined) {
        throw new Error("useChatState must be used with a ChatProvider");
    }
    return context;
};

export const useChatAPI = () => {
    const context = useContext(ChatAPIContext);
    if (context === undefined) {
        throw new Error("useChatState must be used with a ChatProvider");
    }
    return context;
};
