import Image from 'next/image';
import { JSX } from 'react';

import logo from '../../public/assets/logo.png';
import { ClassnameProps } from '../types';

export default function Logo({
  className,
}: ClassnameProps): JSX.Element {
  return (
    <div className={className}>
      <div className="relative inline-flex items-center justify-center gap-[0.625rem] md:gap-[7.5rem]">
        <Image
          className="h-[8rem] w-[8rem] object-cover md:rounded-3xl rounded-[1rem] md:h-[11rem] md:w-[11rem]"
          alt="App store"
          src={logo}
        />
        <div className="relative flex flex-col items-center">
          <div className="relative w-fit whitespace-nowrap font-archivo-black text-[3rem] font-normal leading-[normal] tracking-[0] text-black md:text-[5rem]">
            TYPICAL ARCADE
          </div>
          <div className="relative w-fit whitespace-nowrap font-archivo-regular text-[1rem] font-normal leading-[normal] tracking-[0] text-black md:text-[1.5rem]">
            BY POWEROFTHENUT &amp; BIRDDOG9000
          </div>
        </div>
      </div>
    </div>
  );
}
