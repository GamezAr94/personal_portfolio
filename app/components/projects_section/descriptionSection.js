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
            {projectObj.project_desc.map((pTag, index) => (
                <p key={index} className={styles.desc_container}>
                    {pTag}
                </p>
            ))}
        </div>
    );
}
