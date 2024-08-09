import styles from "./projectsEntry.module.css";
import SingleProject from "./singleProject";
import UnderDevelopment from "../underDevelopment";

import cafelokal from "@/public/img/cafelokal/cafelokal_banner_short.gif";
import astar from "@/public/img/astar_path_finding/astar_alg_gif.gif";
import furelise from "@/public/img/furelise/fur_elise_banner_gif.gif";
import lucygame from "@/public/img/lucyGame/lucyGame-gif.gif";
import tamalyshop from "@/public/img/tamalyshop/tamalyshop_banner_gif.gif";
import bentobox from "@/public/img/bento_layout/bento_layout_desktop.png";
/*
import me_v1 from "@/public/img/MyPictures/myself_v1.jpg";
*/

export default function ProjectsEntry() {
    return (
        <div id="projects_sect" className={styles.projects_container}>
            <div className={styles.divider_tape}>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
                <p className={styles.asterisk}>*</p>
                <p>my work</p>
                <p className={styles.asterisk}>*</p>
                <p>Projects</p>
                <p className={styles.asterisk}>*</p>
                <p>contributions</p>
            </div>
            <div className={styles.projects_list}>
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design & Freelance Development"
                    image={cafelokal}
                />
                <SingleProject
                    title="A* Path Finding Algorithm"
                    subtitle="Unity 2D, algorithm and games"
                    swapped={true}
                    image={astar}
                />
                <SingleProject
                    title="Pâtisserie Für Elise"
                    subtitle="UX/UI Design & Freelance Development"
                    image={furelise}
                />
                <SingleProject
                    title="Lucy Game"
                    subtitle="Unity 2D, GameJam, Light and Collisions"
                    swapped={true}
                    image={lucygame}
                />
                <SingleProject
                    title="Tamaly Shop"
                    subtitle="UX/UI Design & Freelance Development"
                    image={tamalyshop}
                />
                <SingleProject
                    title="Lucy Game"
                    subtitle="Unity 2D, GameJam, Light and Collisions"
                    swapped={true}
                    image={lucygame}
                />
                <SingleProject
                    title="Bento Box Layout"
                    subtitle="Modern UX/UI Design - Experimenting"
                    image={bentobox}
                />
                <SingleProject
                    title="Lucy Game"
                    subtitle="Unity 2D, GameJam, Light and Collisions"
                    swapped={true}
                    image={lucygame}
                />
            </div>
            <UnderDevelopment />
        </div>
    );
}
