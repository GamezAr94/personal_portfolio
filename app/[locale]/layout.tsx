import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import FloatingChat from '@/components/FloattingChat';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

// REPLACE the existing 'metadata' object with this one:
export const metadata: Metadata = {
    title: 'Arturo Gamez - Software Developer',
    description:
        'A full-stack developer building intelligent digital experiences.',
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const { locale } = await params;

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        console.error('Could not load messages:', error);
        // Fallback or error handling
        messages = (await import(`../../messages/en.json`)).default;
    }

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!recaptchaSiteKey) {
        // Un simple aviso para nosotros en la consola de Vercel si se nos olvida
        console.error('ERROR: Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY env var');
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
                    recaptchaSiteKey={recaptchaSiteKey || 'dummy-key'}
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
