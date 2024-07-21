import styles from "./underlyingText.module.css";

export default function UnderlyingText({ text, mail }) {
    return (
        <span className={styles.underline_effect}>
            {mail ? <a href="mailto:contact@arturogamez.com">{text}</a> : text}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="5"
                viewBox="0 0 255 5"
                preserveAspectRatio="none">
                <path
                    d="M4.99975 0C116.771 0.5 178.178 1.6 252 6.0966"
                    stroke="rgb(253, 137, 1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="255"
                    strokeDashoffset="255"></path>
            </svg>
        </span>
    );
}
