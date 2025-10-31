'use client'; // This will be a client component

import styles from './HeroChat.module.css';

export default function HeroChat() {
    return (
        <div className={styles.chatWindow}>
            {/* 1. The Message List */}
            <div className={styles.messageList}>
                {/* These are "dummy" messages just for styling */}
                <div className={`${styles.message} ${styles.aiMessage}`}>
                    Hi there! I'm Arturo's digital assistant. You can ask me
                    anything about his projects.
                </div>

                <div className={`${styles.message} ${styles.userMessage}`}>
                    Cool!
                </div>
            </div>

            {/* 2. The Input Bar */}
            <div className={styles.inputArea}>
                <input
                    type="text"
                    placeholder="Ask about a project..."
                    className={styles.textInput}
                />
                <button className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
}
