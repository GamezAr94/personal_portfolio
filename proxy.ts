// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n'; // Import your locales

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
