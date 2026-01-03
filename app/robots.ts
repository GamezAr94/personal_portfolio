import { MetadataRoute } from "next";

const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.your-portfolio-domain.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*", // Allow all bots (Google, Bing, etc.)
            allow: "/", // Allow them to visit everything
        },
        sitemap: `${BASE_URL}/sitemap.xml`, // Tells them where the map is
    };
}
