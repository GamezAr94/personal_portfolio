// Add the new import at the top
import Hero from '@/components/Hero';
import ProjectChapter from '@/components/ProjectChapter';

// --- Define the data for Chapter 1 ---
const chapter1Data = {
    id: 'projects',
    chapterTitle: 'Chapter 1: The Foundation',
    narrative:
        'It all starts with a solid foundation. I build reliable, scalable systems that solve complex, real-world problems.',
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

            {/* We keep this "fake" div so we can still test
          the Header's scroll animation 
      */}

            <ProjectChapter {...chapter1Data} />

            <div style={{ height: '2000px', background: '#eee' }}>
                <p style={{ paddingTop: '2rem' }}>
                    This is just a tall block of content.
                </p>
            </div>
        </div>
    );
}
