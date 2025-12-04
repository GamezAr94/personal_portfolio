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
        imageUrl: "/img/playground/raspberry-pi.jpg",
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
        imageUrl: "/img/playground/raspberry-pi.jpg",
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
        imageUrl: "/img/playground/raspberry-pi.jpg",
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
        "/img/playground/unity-game.jpg", // p1
        "/img/playground/raspberry-pi.jpg", // p2
        "/img/playground/vim-config.jpg", // p3
        "/img/playground/web-synth.jpg", // p4
        "/img/playground/twitter-bot.jpg", // p5
        "/img/playground/glsl-art.jpg", // p6
    ];
    const playgroundProjects = Array.from(
        { length: PLAYGROUND_PROJECT_COUNT },
        (_, i) => {
            const index = i + 1; // 1-based index
            return {
                title: t_playground(`p${index}_title`),
                description: t_playground(`p${index}_desc`),
                aiQuery: t_playground(`p${index}_aiQuery`),
                imageUrl: playgroundImageUrls[i], // TODO: Add your image URLs
                imageAlt: t_playground(`p${index}_title`),
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
