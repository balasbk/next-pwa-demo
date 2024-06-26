import './globals.scss';
import { Providers } from './providers';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';


export const metadata = {
  title: 'IBM DEMO',
  description: 'IBM DEMO',
};

export default async function RootLayout({
  children,
  params: {locale}
}){
  const messages = await getMessages();
  return (
    <html lang={locale}>
       <head>
        <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          </head>
      <body>
      <NextIntlClientProvider messages={messages}>
        <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}