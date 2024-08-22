import styles from "./arrowMessage.module.css";
import Image from "next/image";
import arrow from "@/public/img/arrow.png";

export default function ArrowMessage({ message, position }) {
    let classProp = position ? styles.mirror : styles.left;
    return (
        <div className={`${styles.arrow_container} ${classProp}}`}>
            <p>{message}</p>
            <Image
                src={arrow}
                alt="arrow pointing to an element in the website"
            />
        </div>
    );
}
