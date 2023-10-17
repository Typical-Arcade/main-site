import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import xLogo from '../../public/assets/landing/x-logo.svg';
import logo from '../../public/assets/logo.png';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex w-full flex-row items-center justify-center bg-[#111314]">
      <div className="flex basis-full flex-row items-center justify-evenly md:h-[80px] md:justify-center">
        <div className="flex basis-1/6 flex-col items-center self-end md:basis-1/4">
          <Image
            alt="XLogo"
            src={logo}
            className="h-[60px] w-[60px] rounded-md object-cover md:h-[150px] md:w-[150px] md:rounded-3xl"
          />
        </div>
        <div className="flex basis-1/6 flex-col items-center whitespace-nowrap font-archivo-black text-[16px] font-normal leading-[24.4px] tracking-[0] text-white md:basis-1/4 md:text-[28px]">
          © 2023 TYPICAL ARCADE
        </div>
        <div className="flex basis-1/12 flex-col items-center md:basis-1/4">
          <Link href="https://twitter.com/typicalarcade">
            <Image
              className="w-fit"
              alt="XLogo"
              src={xLogo}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
