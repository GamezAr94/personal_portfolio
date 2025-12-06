import { getTranslations } from "next-intl/server";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import PlaygroundChapter from "@/components/PlaygroundChapter";
import ProjectChapter from "@/components/ProjectChapter";
import ToolkitSection from "@/components/ToolkitSection";

const PLAYGROUND_PROJECT_COUNT = 9;

export default async function Home({ params }: { params: { locale: string } }) {
    const unwrappedParams = await params;

    const t = await getTranslations({
        locale: unwrappedParams.locale,
        namespace: "ProjectChapters",
    });
    const t_playground = await getTranslations({
        locale: unwrappedParams.locale,
        namespace: "Playground",
    });
    const t_chat_question = await getTranslations({
        locale: unwrappedParams.locale,
        namespace: "ChatQuestions",
    });

    const chapter1Data = {
        id: "projects",
        chapterTitle: t("c1_title"),
        narrative: t("c1_narrative"),
        projectTitle: t("c1_p_title"),
        projectDescription: t("c1_p_desc"),
        techTags: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Gemini API",
            "Stripe API",
            "PostgreSQL",
            "Mantine UI",
        ],
        q1Key: "q_projects_ch1_1",
        q2Key: "q_projects_ch1_2",
        onLeaveBack_q1Key: "q_experience_1",
        onLeaveBack_q2Key: "q_experience_2",
        imageUrl: "img/projects/fazume_banner_screenshot.png",
        imageAlt: "Screenshot of the Fazume.com AI Resume Analyzer dashboard.",
        features: [
            { title: t("c1_f1_title"), description: t("c1_f1_desc") },
            { title: t("c1_f2_title"), description: t("c1_f2_desc") },
            { title: t("c1_f3_title"), description: t("c1_f3_desc") },
            { title: t("c1_f4_title"), description: t("c1_f4_desc") },
        ],
    };

    const chapter2Data = {
        id: "projects-2",
        chapterTitle: t("c2_title"),
        narrative: t("c2_narrative"),
        projectTitle: t("c2_p_title"),
        projectDescription: t("c2_p_desc"),
        techTags: [
            "WordPress",
            "WooCommerce",
            "PHP",
            "JavaScript",
            "CSS",
            "Elementor",
            "Square API",
        ],
        q1Key: "q_projects_ch2_1",
        q2Key: "q_projects_ch2_2",
        onLeaveBack_q1Key: "q_projects_ch1_1",
        onLeaveBack_q2Key: "q_projects_ch1_2",
        imageUrl: "img/projects/tamalyshop_banner.jpg",
        imageAlt: "Screenshot of the Tamaly Shop e-commerce website.",
        features: [
            { title: t("c2_f1_title"), description: t("c2_f1_desc") },
            { title: t("c2_f2_title"), description: t("c2_f2_desc") },
            { title: t("c2_f3_title"), description: t("c2_f3_desc") },
        ],
    };

    const chapter3Data = {
        id: "projects-3",
        chapterTitle: t("c3_title"),
        narrative: t("c3_narrative"),
        projectTitle: t("c3_p_title"),
        projectDescription: t("c3_p_desc"),
        techTags: [
            "Docker",
            "Docker Compose",
            "Linux (Debian)",
            "Bash",
            "VPN",
            "Portainer",
            "Duplicati",
            "Jellyfin",
        ],
        q1Key: "q_projects_ch3_1",
        q2Key: "q_projects_ch3_2",
        onLeaveBack_q1Key: "q_projects_ch2_1",
        onLeaveBack_q2Key: "q_projects_ch2_2",
        imageUrl: "img/projects/Portainer_homelab.png",
        imageAlt:
            "A diagram of the homelab Docker and networking architecture.",
        features: [
            { title: t("c3_f1_title"), description: t("c3_f1_desc") },
            { title: t("c3_f2_title"), description: t("c3_f2_desc") },
            { title: t("c3_f3_title"), description: t("c3_f3_desc") },
            { title: t("c3_f4_title"), description: t("c3_f4_desc") },
        ],
    };
    // Put your image paths from the /public folder here, in order (p1 to p6).
    const playgroundImageUrls = [
        "/img/projects/portfolio_hero_screenshot.png", //p1
        "/img/projects/dkim_diagram.png", // p2
        "/img/playground/raspberry-pi.jpg", // p3
        "/img/projects/automated_spam_representation_rayso.png", // p4
        "/img/projects/MFA_representation_rayso.png", // p5
        "/img/projects/IDE_banner.png", // p6
        "/img/projects/astar_pathfinding_result.png", // p7
        "/img/projects/cafelokal_banner.jpg", // p8
        //"/img/projects/lucy_game.jpg", // p9
        "/img/projects/frog_game.jpg", // p9
    ];
    const linksToProject = [
        "https://github.com/GamezAr94/personal_portfolio", //p1
        null, // p2
        null, // p3
        null, // p4
        null, // p5
        "/img/projects/IDE_banner.png", // p6
        "https://github.com/GamezAr94/AstarPathFindingAlgorithm", // p7
        null, // p8
        //"/img/projects/lucy_game.jpg", // p9
        "https://github.com/GamezAr94/Frog-Game", // p9
    ];
    const playgroundProjects = Array.from(
        { length: PLAYGROUND_PROJECT_COUNT },
        (_, i) => {
            const index = i + 1; // 1-based index
            return {
                title: t_playground(`p${index}_title`),
                description: t_playground(`p${index}_desc`),
                imageUrl: playgroundImageUrls[i],
                linksGit: linksToProject[i],
                imageAlt: t_playground(`p${index}_title`),
                aiQuery: t_chat_question(`q_playground_${index}`),
            };
        },
    );

    const chapter4Data = {
        id: "chapter4",
        chapterTitle: t("c4_title"),
        narrative: t("c4_narrative"), // This data is still hard-coded
        projects: playgroundProjects,
    };

    return (
        // We still keep the outer div for alignment
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Hero />

            <AboutSection />

            <ToolkitSection />

            <ExperienceSection />

            <ProjectChapter {...chapter1Data} />

            <ProjectChapter {...chapter2Data} />

            <ProjectChapter {...chapter3Data} />

            <PlaygroundChapter {...chapter4Data} />
        </div>
    );
}
