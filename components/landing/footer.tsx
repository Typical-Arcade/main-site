import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { ClassnameProps } from '../types';

export const Footer = ({ className }: ClassnameProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="relative bottom-0 bg-[#121314]">
        <div className="flex h-[94px] w-full flex-row items-center justify-evenly">
          <div className="h-[50px] w-[50px] bg-[url(/assets/logo.svg)] bg-cover bg-[50%_50%] md:h-[143px] md:w-[143px] md:self-end" />
          <div className="whitespace-nowrap font-archivo-black text-[16px] font-normal leading-[24.4px] tracking-[0] text-white md:text-[28px]">
            © 2023 TYPICAL ARCADE
          </div>
          <Link href="https://twitter.com/typicalarcade">
            <Image
              height={1}
              width={1}
              className="h-[25px] w-[25px] md:h-[40px] md:w-[40px]"
              alt="XLogo"
              src="/assets/landing/x-logo.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
