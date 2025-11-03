'use client';

// We just import the new styles. The name is the same.
import styles from './HeroChat.module.css';

// A simple ASCII art for the "Playful" touch
const asciiArt = `
    _    ____ _____ ___ 
   / \\  |  _ \\_   _|_ _|
  / _ \\ | |_) || |  | | 
 / ___ \\|  _ < | |  | | 
/_/   \\_\\_| \\_\\|_| |___|
                        
`;

export default function HeroChat() {
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
            <div className={styles.messageList}>
                {/* The ASCII Art */}
                <div className={styles.asciiArt}>{asciiArt}</div>

                {/* AI Message */}
                <div className={styles.aiMessage}>
                    <strong>Arturo-AI:</strong>
                    <p>
                        Hi there! I'm Arturo's digital assistant. You can ask me
                        anything about Arturo and his projects.
                    </p>
                </div>

                {/* User Message */}
                <div className={styles.userMessage}>
                    <span className={styles.userPrompt}>&gt;</span>
                    <span className={styles.userText}>Cool!</span>
                </div>
            </div>

            {/* Input Bar */}
            <div className={styles.inputArea}>
                <span className={styles.promptSymbol}>&gt;</span>
                <input
                    type="text"
                    placeholder="Ask about a project..."
                    className={styles.textInput}
                />
                {/* The send button is here, but hidden by the CSS */}
                <button className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
}
