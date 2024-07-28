import styles from "./successMessage.module.css";

export default function SuccessMessage() {
    return (
        <div className={styles.success_container}>
            <div className={styles.jello_horizontal}>
                <p>🚀</p>
            </div>
            <p className={styles.email_sent}>Email Sent</p>
        </div>
    );
}
