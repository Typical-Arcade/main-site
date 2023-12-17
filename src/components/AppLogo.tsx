import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/img/logo.png';

import { ClassnameProps } from './types';

export default function AppLogo({ className }: ClassnameProps) {
  return (
    <Link href="/">
      <Image alt="logo" src={logo} className={`${className} object-cover`} />
    </Link>
  );
}
