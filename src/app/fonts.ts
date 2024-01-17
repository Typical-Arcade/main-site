import { Archivo_Black, Heebo, Archivo } from 'next/font/google';

export const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black',
});

export const archivo = Archivo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-regular',
});

export const heebo = Heebo({
  subsets: ['latin'],
  display: 'fallback',
});