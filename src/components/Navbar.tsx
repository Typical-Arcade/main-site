'use client';

import Link from 'next/link';
import { JSX } from 'react';

import PreventDragToReload from './PreventDragToReload';

export default function NavBar(): JSX.Element {
  return (
    <>
      <PreventDragToReload />
      <div className="navbar-height z-top relative top-0 flex w-full flex-col items-center bg-[#121314]">
        <div className="relative flex h-full w-full flex-row items-center justify-center">
          <Link
            className="relative right-[6rem] flex h-full basis-[25%] cursor-pointer flex-col justify-center"
            href="/"
          >
            <div className="w-fit whitespace-nowrap font-archivo-black text-[1.8rem] font-normal leading-[2rem] tracking-[0] text-white">
              {'< BACK'}
            </div>
          </Link>
          <div className="relative flex h-full basis-[50%] flex-col justify-center whitespace-nowrap font-archivo-black text-[2rem] font-normal leading-[2rem] tracking-[0] text-white">
            GARBAGE DROP
          </div>
        </div>
      </div>
    </>
  );
}
