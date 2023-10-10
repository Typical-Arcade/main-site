import Image from 'next/image';
import { JSX } from 'react';

import { Logo } from '../logo';

import { ConnectButton } from './connectButton';
import { Joystick } from './joystick';
import { TopButton } from './topButton';

export const Arcade = (): JSX.Element => {
  return (
    <div className="mt-8 flex w-screen flex-col items-center">
      <div className="absolute flex flex-col items-center">
        <Image
          width={1}
          height={1}
          className="w-fit"
          src="/assets/arcade.svg"
          alt="arcade-base"
        />
      </div>
      <div className="flex flex-col items-center">
        <Logo className="relative top-[1.6rem] flex h-[130px] flex-col content-center items-center md:top-[6rem] md:h-[432px]" />
        {/* Screen */}
        <div className="relative bottom-[1rem] flex flex-col items-center justify-center md:bottom-[3rem]">
          <div className="h-[200px] w-[315px] border-[3px] border-black [transform:perspective(45px)_rotateX(1deg)] md:h-[850px] md:w-[1225px] md:[transform:perspective(200px)_rotateX(1deg)]"></div>
          <div className="absolute h-[185px] w-[300px] bg-black [transform:perspective(45px)_rotateX(1deg)] md:h-[800px] md:w-[1175px] md:[transform:perspective(200px)_rotateX(1deg)]"></div>
        </div>
      </div>
      <div className="flex w-screen flex-col items-center">
        <div className="flex h-[60px] scale-[0.3] flex-row items-center gap-x-[25rem] md:bottom-10 md:left-[6rem] md:h-[180px] md:scale-100 md:gap-x-[40rem]">
          <Joystick className="-translate-x-[50px] -translate-y-[40px] md:-translate-x-[50px] md:translate-y-0" />
          <div className="flex flex-row justify-between gap-x-[150px] md:-translate-x-[50px]">
            <TopButton text="A" />
            <TopButton text="B" />
          </div>
        </div>
        <div className="flex w-[85%] translate-y-10 flex-col items-end md:w-1/2 md:basis-1/2 md:translate-y-40">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};
