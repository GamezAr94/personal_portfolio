import styles from "./certificationsEntry.module.css";

export default function CertificationsEntry() {
    return (
        <div className={styles.certification_container}>
            <div className={styles.stamp_container}>
                <p className={styles.medal}>🏅</p>
                <svg
                    className={styles.stamp}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="circlePath"
                        stroke="gray"
                        fill="none"
                        opacity=".2"
                        d="
      M 5, 10
      a 5,5 0 1,1 10,0
      5,5 0 1,1 -10,0
    "
                    />
                    <text fill="white">
                        <textPath href="#circlePath">
                            Achivements &#8226;{" "}
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className={styles.certificate}>
                <div
                    className={`${styles.img_certificate} ${styles.bcit}`}></div>
                <div className={styles.list}>
                    <h5>British Columbia Institute of Technology</h5>
                    <p className={styles.description}>
                        I built a strong foundation in computing and IT through
                        three certificates. I mastered programming languages,
                        web development, and software development best
                        practices, thanks to hands-on learning and valuable
                        mentorship. One instructor, in particular, became a
                        mentor and friend, offering invaluable support and
                        encouragement.
                    </p>
                    <ul>
                        <li>Applied Computer Information Systems</li>
                        <li>Computer Systems Certificate</li>
                        <li>Applied Software Development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
