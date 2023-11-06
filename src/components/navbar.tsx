'use client';

import { JSX } from 'react';

import AppLogo from './appLogo';

export default function NavBar(): JSX.Element {
  return (
    <div className="relative top-0 flex h-[7rem] w-full flex-col items-center bg-[#121314]">
      <div className="relative flex h-full w-full flex-row items-center justify-center">
        <div className="basis-1/3 cursor-pointer pl-[1rem]">
          <AppLogo className="h-[5rem] w-[5rem] rounded-[3rem]" />
        </div>
        <div className="relative flex h-full basis-2/3 flex-col justify-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
          GARBAGE DROP
        </div>
      </div>
    </div>
  );
}
