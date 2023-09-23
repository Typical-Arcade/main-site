import type { Metadata } from 'next';
import { Archivo_Black, Archivo } from 'next/font/google';
import './global.css';

export const metadata: Metadata = {
  title: 'Typical Arcade',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  viewport: {
    initialScale: 1,
    userScalable: false,
    width: 'device-width',
    maximumScale: 1,
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable}`}>
      <body className="hidden-scrollbar">{children}</body>
    </html>
  );
}
