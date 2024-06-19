import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with Next.js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}