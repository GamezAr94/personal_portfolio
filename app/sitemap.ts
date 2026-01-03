import { MetadataRoute } from "next";
import { locales } from "@/i18n"; // References your existing configuration

// 1. Define your base domain (Change this to your actual Vercel domain)
const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.your-portfolio-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
    // 2. We map over your locales (en, es, fr) to create an entry for each
    const sitemapEntries = locales.map((locale) => ({
        url: `${BASE_URL}/${locale}`, // Generates /en, /es, /fr
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1.0, // Top priority because it is your main page
    }));

    return sitemapEntries;
}
