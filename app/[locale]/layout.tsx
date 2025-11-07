import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import FloatingChat from '@/components/FloattingChat';
import Footer from '@/components/Footer';

// Import the provider and message loader
import { NextIntlClientProvider } from 'next-intl';
//import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

// REPLACE the existing 'metadata' object with this one:
export const metadata: Metadata = {
    title: 'Arturo Gamez - Playful Engineer',
    description:
        'A full-stack engineer building playful and intelligent digital experiences.',
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

    return (
        <html
            lang={locale}
            className="scroll-smooth"
            data-scroll-behavior="smooth"
        >
            {/* The installer correctly set up the font in the body */}
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    <main>{children}</main>
                    <FloatingChat />
                    <Footer githubUrl="string" linkedinUrl="string" />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
