import Image from "next/image";
import styles from "./descriptionSection.module.css";
import Link from "next/link";

export default function DescriptionSection({ projectObj }) {
    let linksSection = "";
    if (projectObj.badges && projectObj.badges.length > 0) {
        linksSection = projectObj.badges.map((badgesObj, index) => (
            <Link
                key={index}
                href={badgesObj.url}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    src={badgesObj.icon}
                    alt={badgesObj.icon_desc}
                    width={94}
                    height={28}
                />
            </Link>
        ));
    }
    return (
        <div className={styles.main_container}>
            <p className={styles.title}>{projectObj.title}</p>
            <p className={styles.sub_title}>{projectObj.subtitle}</p>
            <div className={styles.icons_container}>{linksSection}</div>
            <div className={styles.desc_container}>
                {projectObj.project_desc.map((pTag, index) => {
                    const parts = pTag.split("***");
                    return (
                        <p key={index} className={styles.desc_p}>
                            {parts.map((part, i) =>
                                i % 2 === 0 ? (
                                    part
                                ) : (
                                    <strong
                                        className={styles.highlight}
                                        key={i}>
                                        {part}
                                    </strong>
                                )
                            )}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
