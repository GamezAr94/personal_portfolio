import { getRequestConfig } from 'next-intl/server';

// Your supported languages
export const locales = ['en', 'es', 'fr'];

export default getRequestConfig(async ({ locale }) => {
    let resolvedLocale: string;

    // Check if the locale is a valid, supported string
    if (locale && locales.includes(locale)) {
        resolvedLocale = locale;
    } else {
        // If locale is undefined or not in the list (e.g., '/de'),
        // default to 'en'.
        resolvedLocale = 'en';
    }

    return {
        locale: resolvedLocale,
        messages: (await import(`./messages/${resolvedLocale}.json`)).default,
    };
});
