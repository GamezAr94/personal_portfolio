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
/*
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
*/
const chapter1Data = {
    id: 'projects',
    chapterTitle: 'Chapter 1: AI & SaaS Engineering',
    narrative:
        'From idea to launch. I architect, build, and deploy complete, AI-powered, and production-ready applications from scratch.',
    projectTitle: 'AI Resume Analyzer - Fazume.com',
    projectDescription:
        'A full-stack, production-ready SaaS application I conceived, architected, and launched. Fazume.com uses Google\'s Gemini API to analyze a user\'s "master profile" against a job description, instantly generating a perfectly tailored, ATS-friendly resume. The live platform includes full Supabase auth and Stripe payment integration.',
    techTags: [
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'Gemini API',
        'Stripe API',
        'PostgreSQL',
        'Mantine UI',
    ],
    aiQuery: 'Tell me more about the Stripe integration on Fazume.com.',
    imageUrl: 'https://placehold.co/600x450/007BFF/FFFFFF?text=Fazume.com+UI',
    imageAlt: 'Screenshot of the Fazume.com AI Resume Analyzer dashboard.',
    features: [
        {
            title: 'Advanced AI Prompt Engineering',
            description:
                'Engineered a complex prompt for the Gemini API to return a strict, predictable JSON schema, ensuring 100% reliable resume generation from two data sources.',
        },
        {
            title: 'Full Stripe Payment System',
            description:
                'Architected a complete monetization system with Stripe for token packs and subscriptions, including a robust webhook endpoint for securely provisioning services.',
        },
        {
            title: 'Live Interactive PDF Editor',
            description:
                'Built an editor where any user change (e.g., hiding a job) instantly triggers a live @react-pdf/renderer component, providing immediate visual feedback.',
        },
        {
            title: 'Solo Developer to Live Users',
            description:
                'Successfully designed, built, and launched the entire application, acquiring the first 14 active users and processing user feedback within 1 month.',
        },
    ],
};
const chapter2Data = {
    id: 'projects-2',
    chapterTitle: 'Chapter 2: E-Commerce & Business Solutions',
    narrative:
        "I don't just build websites, I build businesses. I partner with clients to understand their core needs and deliver end-to-end solutions that drive real-world results.",
    projectTitle: 'Tamaly Shop E-commerce Platform',
    projectDescription:
        'I built and launched a complete e-commerce platform from scratch for a new restaurant. This WordPress/WooCommerce solution included a custom theme built with Elementor, a full online ordering system, and direct integration with their Square POS. I also trained their staff, enabling them to manage their website independently.',
    techTags: [
        'WordPress',
        'WooCommerce',
        'PHP',
        'JavaScript',
        'CSS',
        'Elementor',
        'Square API',
    ],
    aiQuery: 'How did you integrate the Square POS with WooCommerce?',
    imageUrl: 'https://placehold.co/600x450/7A2048/FFFFFF?text=Tamaly+Shop',
    imageAlt: 'Screenshot of the Tamaly Shop e-commerce website.',
    features: [
        {
            title: 'E-commerce & Square POS Integration',
            description:
                'Built a complete WooCommerce store to manage their 60+ product catalog. I custom-integrated it with their Square POS, streamlining their in-house and online order workflow.',
        },
        {
            title: 'Client Training & Self-Sufficiency',
            description:
                'Provided comprehensive training and documentation, empowering the restaurant staff to independently manage their 30+ events, update the menu, and process all orders.',
        },
        {
            title: 'Full-Service Technology Partner',
            description:
                'Acted as a complete technology partner for their business launch, handling everything from custom PHP theme development to setting up their professional domain emails.',
        },
    ],
};
const chapter3Data = {
    id: 'projects-3',
    chapterTitle: 'Chapter 3: DevOps & Infrastructure',
    narrative:
        "I don't just build applications; I understand the metal they run on. I architect, deploy, and automate the entire infrastructure stack from the OS up.",
    projectTitle: 'Docker Homelab with Game Server & Media Platform',
    projectDescription:
        'I architected a low-power, robust homelab on a Raspberry Pi 4. I containerized a multi-service stack with Docker Compose, including a live Terraria game server for my friends and a Jellyfin personal media server. The entire stack is secured, monitored, and backed-up automatically.',
    techTags: [
        'Docker',
        'Docker Compose',
        'Linux (Debian)',
        'Bash',
        'VPN',
        'Portainer',
        'Duplicati',
        'Jellyfin',
    ],
    aiQuery: 'Ask me about the secure VPN tunneling setup.',
    imageUrl: 'https://placehold.co/600x450/DE3163/FFFFFF?text=Homelab+Infra',
    imageAlt: 'A diagram of the homelab Docker and networking architecture.',
    features: [
        {
            title: 'Containerized Game & Media Stack',
            description:
                'Deployed a multi-service Docker ecosystem, including a TShock Terraria server for live game hosting (with persistent world data) and a Jellyfin server for personal media streaming.',
        },
        {
            title: 'Secure Network Architecture',
            description:
                'Architected a secure network where all services are containerized. I routed all outbound traffic through a Gluetun (VPN) container, isolating and protecting the entire homelab stack.',
        },
        {
            title: 'Automated Off-site Backups & Monitoring',
            description:
                'Built a "set-it-and-forget-it" system using Portainer for UI management, Glances for real-time monitoring, and Duplicati for automated, encrypted (AES-256) daily backups to Google Drive.',
        },
        {
            title: 'Advanced Network Troubleshooting',
            description:
                'Diagnosed and resolved complex, non-obvious issues at all levels, from a Docker-level DNS resolver conflict (solved in `daemon.json`) to client-side Steam compatibility problems.',
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

            <ProjectChapter {...chapter2Data} />

            <ProjectChapter {...chapter3Data} />

            <PlaygroundChapter {...chapter4Data} />
        </div>
    );
}
