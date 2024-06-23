import styles from "./backgroundSymbols.module.css";

export default function BackgroundSymbols() {
    return (
        <div className={styles.bgc}>
            <p>&#123; &#125;</p>
            <p>[ ]</p>
            <p>&lt; &gt;</p>
            <p>( )</p>
            <p>&gt;=</p>
            <p>&amp;&amp;</p>
        </div>
    );
}
