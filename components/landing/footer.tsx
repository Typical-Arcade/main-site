import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="h-fit w-full">
      <div className="relative bottom-0 bg-[#121314]">
        <div className="flex h-[40px] md:h-[80px] flex-row items-center md:justify-center justify-evenly">
          <div className="flex basis-1/6 flex-col items-center self-end md:basis-1/4">
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
      </div>
    </footer>
  );
};
