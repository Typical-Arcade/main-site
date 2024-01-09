'use client';

import Link from 'next/link';
import { JSX } from 'react';

import PreventDragToReload from './PreventDragToReload';

export default function NavBar(): JSX.Element {
  return (
    <>
      <PreventDragToReload />
      <div className="navbar-height relative top-0 z-top flex w-full flex-col items-center bg-[#121314]">
        <div className="relative flex h-full w-full flex-row items-center justify-center">
          <Link
            className="absolute left-[6rem] flex h-full basis-[25%] cursor-pointer flex-col justify-center"
            href="/"
          >
            <div className="flex h-full w-fit flex-row items-center whitespace-nowrap font-archivo-black font-normal leading-[2rem] tracking-[0] text-white gap-[0.5rem]">
              <div className='relative translate-y-[-0.35rem] text-[3rem]'>{'<'}</div>
              <div className='text-[1.8rem]'>BACK</div>
            </div>
          </Link>
          <div className="relative flex h-full flex-col justify-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
            GARBAGE DROP
          </div>
        </div>
      </div>
    </>
  );
}
