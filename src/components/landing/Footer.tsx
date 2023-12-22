import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import xLogo from '../../../public/img/landing/x-logo.png';
import AppLogo from '../AppLogo';

export default function Footer(): JSX.Element {
  return (
    <footer className="relative h-[8rem] w-full bg-[#111314]">
      <div className='absolute bg-[#111314] h-[calc(8rem+env(safe-area-inset-bottom))] w-full top-0 left-0' />
      <div className="flex h-full flex-row items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <AppLogo className="relative h-3/4 w-[8rem] rounded-[3rem]" />
        </div>
        <div className="z-10 h-full flex flex-col justify-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
          © 2023 TYPICAL ARCADE
        </div>
        <div className="h-full">
          <Link className="h-full relative flex flex-col items-center justify-center" href="https://twitter.com/typicalarcade">
            <Image className="h-1/2 w-fit" alt="XLogo" src={xLogo} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
