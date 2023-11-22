// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';

import { archivoBlack, archivo, heebo } from './fonts';

import './global.css';

export const metadata: Metadata = {
  title: 'Typical Arcade',
  icons: {
    apple: '/apple-icon-180.png'
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Typical Arcade'
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: 'device-width',
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${archivo.variable} ${heebo.className} overscroll-y-contain overscroll-x-none`}
    >
      <body className="hidden-scrollbar iphone">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
