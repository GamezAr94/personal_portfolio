import { getTranslations } from 'next-intl/server';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import Hero from '@/components/Hero';
import PlaygroundChapter from '@/components/PlaygroundChapter';
import ProjectChapter from '@/components/ProjectChapter';
import ToolkitSection from '@/components/ToolkitSection';
import { playgroundProjects } from '@/data/projects';

export default async function Home({ params }: { params: { locale: string } }) {
    const unwrappedParams = await params;

    const t = await getTranslations({
        locale: unwrappedParams.locale,
        namespace: 'ProjectChapters',
    });

    const chapter1Data = {
        id: 'projects',
        chapterTitle: t('c1_title'),
        narrative: t('c1_narrative'),
        projectTitle: t('c1_p_title'),
        projectDescription: t('c1_p_desc'),
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
        aiQuery: t('c1_aiQuery'),
        imageUrl:
            'https://placehold.co/600x450/007BFF/FFFFFF?text=Fazume.com+UI',
        imageAlt: 'Screenshot of the Fazume.com AI Resume Analyzer dashboard.',
        features: [
            { title: t('c1_f1_title'), description: t('c1_f1_desc') },
            { title: t('c1_f2_title'), description: t('c1_f2_desc') },
            { title: t('c1_f3_title'), description: t('c1_f3_desc') },
            { title: t('c1_f4_title'), description: t('c1_f4_desc') },
        ],
    };

    const chapter2Data = {
        id: 'projects-2',
        chapterTitle: t('c2_title'),
        narrative: t('c2_narrative'),
        projectTitle: t('c2_p_title'),
        projectDescription: t('c2_p_desc'),
        techTags: [
            'WordPress',
            'WooCommerce',
            'PHP',
            'JavaScript',
            'CSS',
            'Elementor',
            'Square API',
        ],
        aiQuery: t('c2_aiQuery'),
        imageUrl: 'https://placehold.co/600x450/7A2048/FFFFFF?text=Tamaly+Shop',
        imageAlt: 'Screenshot of the Tamaly Shop e-commerce website.',
        features: [
            { title: t('c2_f1_title'), description: t('c2_f1_desc') },
            { title: t('c2_f2_title'), description: t('c2_f2_desc') },
            { title: t('c2_f3_title'), description: t('c2_f3_desc') },
        ],
    };

    const chapter3Data = {
        id: 'projects-3',
        chapterTitle: t('c3_title'),
        narrative: t('c3_narrative'),
        projectTitle: t('c3_p_title'),
        projectDescription: t('c3_p_desc'),
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
        aiQuery: t('c3_aiQuery'),
        imageUrl:
            'https://placehold.co/600x450/DE3163/FFFFFF?text=Homelab+Infra',
        imageAlt:
            'A diagram of the homelab Docker and networking architecture.',
        features: [
            { title: t('c3_f1_title'), description: t('c3_f1_desc') },
            { title: t('c3_f2_title'), description: t('c3_f2_desc') },
            { title: t('c3_f3_title'), description: t('c3_f3_desc') },
            { title: t('c3_f4_title'), description: t('c3_f4_desc') },
        ],
    };

    const chapter4Data = {
        id: 'chapter4',
        chapterTitle: t('c4_title'),
        narrative: t('c4_narrative'),
        projects: playgroundProjects, // This data is still hard-coded
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
