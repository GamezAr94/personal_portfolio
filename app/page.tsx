// Add the new import at the top
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import Hero from '@/components/Hero';
import PlaygroundChapter from '@/components/PlaygroundChapter';
import ProjectChapter from '@/components/ProjectChapter';
import ToolkitSection from '@/components/ToolkitSection';
import { playgroundProjects } from '@/data/projects';

const chapter4Data = {
    id: 'chapter4',
    chapterTitle: 'Chapter 4: The Playground',
    narrative:
        "My passion for code doesn't stop at 5 PM. I'm always experimenting.",
    projects: playgroundProjects, // Pass in all projects
};

// --- Define the data for Chapter 1 ---
const chapter1Data = {
    id: 'projects',
    chapterTitle: 'Chapter 1: Intelligent Dashboards',
    narrative:
        'My Solid foundation. I build reliable, scalable systems that solve complex, real-world problems.',
    projectTitle: 'PWA Dashboard for MagicMail',
    projectDescription:
        'A real-time progressive web app dashboard for a mail server. It allows admins to monitor server health, track spam reports live, and manage user accounts and push notifications from any device.',
    techTags: ['C#', 'PHP', 'Linux', 'MySQL', 'PWA'],
    aiQuery: "Tell me more about the 'MagicMail' project.",
    imageUrl:
        'https://placehold.co/600x450/16DB93/F8F8F8?text=MagicMail+Dashboard+UI',
    imageAlt: 'Screenshot of the MagicMail PWA Dashboard',
    features: [
        {
            title: 'Real-time Server Health',
            description:
                'Live CPU, RAM, and disk usage monitors to prevent downtime before it happens.',
        },
        {
            title: 'Live Spam Tracking',
            description:
                'Admins can see and manage spam reports as they come in, training the filter.',
        },
        {
            title: 'Push Notifications',
            description:
                "Critical alerts for server issues are pushed directly to the admin's phone.",
        },
    ],
};

export default function Home() {
    return (
        // We still keep the outer div for alignment
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Hero />

            <AboutSection />

            <ToolkitSection />

            <ExperienceSection />

            <ProjectChapter {...chapter1Data} />

            <ProjectChapter {...chapter1Data} />

            <PlaygroundChapter {...chapter4Data} />
        </div>
    );
}
