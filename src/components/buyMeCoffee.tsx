'use client';

import { JSX } from 'react';

export default function BuyMeCoffee(): JSX.Element {
  return (
    <a
      className="h-fit w-fit"
      href="https://www.buymeacoffee.com/typicalarcade"
    >
      <button className="h-fit w-fit rounded-[1rem] bg-[#FF5F5F] hover:bg-[#e66f5a] px-[1.5rem] py-[1rem] font-archivo-black">
        <div className="flex h-fit w-fit items-center">
          <span className='text-[1.5rem]'>🎮</span>
          <span className="font-archivo-black text-white text-[1.3rem]">
            Help keep the games running
          </span>
        </div>
      </button>
    </a>
  );
}
