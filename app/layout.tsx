import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

// REPLACE the existing 'metadata' object with this one:
export const metadata: Metadata = {
    title: 'Arturo Gamez - Playful Engineer',
    description:
        'A full-stack engineer building playful and intelligent digital experiences.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* The installer correctly set up the font in the body */}
            <body className={`${inter.className} antialiased`}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
