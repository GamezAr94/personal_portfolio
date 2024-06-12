import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Developer 🚀 | Portfolio | Arturo Gamez ",
    description: "Personal Portfolio to showcase my experience and project",
};

export default function RootLayout({ children }) {
    const theme = {
        // Your custom colors, font families, etc.
    };
    return (
        <html lang="en">
            <body className={inter.className}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
