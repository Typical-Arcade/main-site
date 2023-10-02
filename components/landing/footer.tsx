import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-full flex-row items-center justify-center bg-[#121314]">
      <div className="flex md:h-[80px] basis-full flex-row items-center justify-evenly md:justify-center">
        <div className="flex basis-1/6 flex-col items-center md:basis-1/4 self-end">
          <Image
            height={1}
            width={1}
            alt="XLogo"
            src="/assets/logo.svg"
            className="w-fit"
          />
        </div>
        <div className="flex basis-1/6 flex-col items-center whitespace-nowrap font-archivo-black text-[16px] font-normal leading-[24.4px] tracking-[0] text-white md:basis-1/4 md:text-[28px]">
          © 2023 TYPICAL ARCADE
        </div>
        <div className="flex basis-1/12 flex-col items-center md:basis-1/4">
          <Link href="https://twitter.com/typicalarcade">
            <Image
              height={1}
              width={1}
              className="w-fit"
              alt="XLogo"
              src="/assets/landing/x-logo.svg"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
