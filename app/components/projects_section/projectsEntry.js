import styles from "./projectsEntry.module.css";
import SingleProject from "./singleProject";
import UnderDevelopment from "../underDevelopment";
import projectList from "./projectsData";
import DividerTape from "./dividerTape";

export default function ProjectsEntry() {
    return (
        <div id="projects_sect" className={styles.projects_container}>
            <DividerTape />
            <div className={styles.projects_list}>
                {projectList.map((project, index) => (
                    <SingleProject
                        swapped={index % 2 == 0 ? true : false}
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        alt={project.alt_main_img}
                        image={project.main_image}
                        projectObj={project}
                    />
                ))}
            </div>
            <UnderDevelopment />
        </div>
    );
}
