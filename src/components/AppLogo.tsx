import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import logo from '../../public/img/logo.png';


export default function AppLogo({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Link href="/">
      <Image alt="logo" src={logo} className={`${className} object-cover`} />
    </Link>
  );
}
