import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

// Setup the Inter font
const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

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
            <body className={`${inter.className} antialiased`}>
                {/* The "Engineer's" Workshop Structure.
          Global components like the Header and Chat will live here
          so they persist across the entire app.
        */}

                {/* 1. The Header/Nav (We will build this next) */}
                {/* <Header /> */}

                {/* 2. The Main Content (this is your app/page.tsx) */}
                <main>{children}</main>

                {/* 3. Global AI Chat Components (We will build these) */}
                {/* <FloatingChat /> */}

                {/* 4. The "Artist" Custom Cursor (We will build this) */}
                {/* <CustomCursor /> */}
            </body>
        </html>
    );
}
