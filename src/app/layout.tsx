// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Archivo_Black, Archivo } from 'next/font/google';
import { PropsWithChildren } from 'react';

import './global.css';

export const metadata: Metadata = {
  title: 'Typical Arcade',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: 'device-width',
  maximumScale: 1,
};

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black',
});

const archivo = Archivo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-regular',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${archivo.variable} overscroll-contain`}>
      <body className="hidden-scrollbar">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
