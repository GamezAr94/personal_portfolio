import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import FloatingChat from "@/components/FloattingChat";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
    // 1. Base URL: Required for social images to work on Vercel
    metadataBase: new URL("https://www.arturogamez.com"),

    title: "Arturo Gamez - Software Developer | Vancouver, Canada",
    description:
        "Full-Stack Software Developer based in Vancouver, Canada. I build intelligent, scalable solutions using Next.js, PHP, Rust, and AI.",

    // 2. Open Graph (This controls the look on LinkedIn!)
    openGraph: {
        title: "Arturo Gamez - Software Developer",
        description:
            "Building intelligent digital experiences in Vancouver. Ask my AI assistant about my work!",
        url: "https://www.arturogamez.com",
        siteName: "Arturo Gamez Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/img/avatar_icon.png", // Uses your profile picture
                width: 800,
                height: 600,
                alt: "Arturo Gamez - Software Developer",
            },
        ],
    },

    keywords: [
        "Software Developer",
        "Full Stack Developer",
        "Vancouver",
        "Canada",
        "Halifax",
        "Toronto",
        "Next.js",
        "JS",
        "Game Developer",
        "Unity",
        "Unity3D",
        "C#",
        "Game development",
        "PHP",
        "Rust",
        "Artificial Intelligence",
        "Arturo Gamez",
        "Web Development",
        "React",
        "System Architecture",
    ],

    // 3. Twitter Card (Kept so your link looks good if OTHERS share it)
    twitter: {
        card: "summary_large_image",
        title: "Arturo Gamez - Software Developer",
        description:
            "Full-Stack Developer in Vancouver. Check out my interactive AI portfolio.",
        images: ["/img/avatar_icon.png"],
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        console.error("Could not load messages:", error);
        // Fallback or error handling
        messages = (await import(`../../messages/en.json`)).default;
    }

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!recaptchaSiteKey) {
        // Un simple aviso para nosotros en la consola de Vercel si se nos olvida
        console.error("ERROR: Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY env var");
    }

    return (
        <html
            lang={locale}
            className="scroll-smooth"
            data-scroll-behavior="smooth"
        >
            {/* The installer correctly set up the font in the body */}
            <body className={`${inter.className} antialiased`}>
                <Providers
                    locale={locale}
                    messages={messages}
                    recaptchaSiteKey={recaptchaSiteKey || "dummy-key"}
                >
                    <Header />
                    <main>{children}</main>
                    <FloatingChat />
                    <Footer githubUrl="string" linkedinUrl="string" />
                </Providers>
            </body>
        </html>
    );
}
