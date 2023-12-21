import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, JSX } from 'react';

import xLogo from '../../../public/img/landing/x-logo.png';
import AppLogo from '../AppLogo';

export default function Footer({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <footer className={`${className} w-full bg-[#111314]`}>
      <div className="flex h-full flex-row items-center justify-evenly">
        <div className="flex flex-col items-center ">
          <AppLogo className="relative top-[0.5rem] h-[6rem] w-[6rem] rounded-[3rem]" />
        </div>
        <div className="flex flex-row items-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
          © 2023 TYPICAL ARCADE
        </div>
        <div className="flex flex-col items-center">
          <Link
            className="relative top-[0.5rem]"
            href="https://twitter.com/typicalarcade"
          >
            <Image className="w-fit" alt="XLogo" src={xLogo} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
