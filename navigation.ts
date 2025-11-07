// /navigation.ts
import { createNavigation } from 'next-intl/navigation';
// Import your locales from i18n.ts
import { locales } from './i18n';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
    locales: locales,
    localePrefix: 'always', // This must match your middleware config
});
