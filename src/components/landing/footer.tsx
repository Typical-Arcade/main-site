import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import xLogo from '../../../public/img/landing/x-logo.png';
import logo from '../../../public/img/logo.png';

export default function Footer(): JSX.Element {
  return (
    <footer className="h-[8rem] w-full bg-[#111314]">
      <div className="flex h-full flex-row items-center justify-evenly">
        <div className="flex flex-col items-center self-end">
          <Image
            alt="XLogo"
            src={logo}
            className="h-[15rem] w-[15rem] rounded-[3rem] object-cover"
          />
        </div>
        <div className="flex flex-row items-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
          © 2023 TYPICAL ARCADE
        </div>
        <div className="flex flex-col items-center">
          <Link href="https://twitter.com/typicalarcade">
            <Image className="w-fit" alt="XLogo" src={xLogo} />
          </Link>
        </div>
      </div>
    </footer>
  );
}