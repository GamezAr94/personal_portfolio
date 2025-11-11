'use client';

import { NextIntlClientProvider } from 'next-intl';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type ProvidersProps = {
    children: React.ReactNode;
    messages: any; // Puedes usar 'AbstractIntlMessages' si lo importas
    locale: string;
    recaptchaSiteKey: string;
};

export default function Providers({
    children,
    messages,
    locale,
    recaptchaSiteKey,
}: ProvidersProps) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={recaptchaSiteKey}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            <NextIntlClientProvider messages={messages} locale={locale}>
                {children}
            </NextIntlClientProvider>
        </GoogleReCaptchaProvider>
    );
}
