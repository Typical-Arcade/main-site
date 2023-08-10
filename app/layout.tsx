import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Typical Arcade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}