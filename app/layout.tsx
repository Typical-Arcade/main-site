import type { Metadata } from 'next';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-scroll">{children}</body>
    </html>
  );
}
