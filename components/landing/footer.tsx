import { JSX } from 'react';

export const Footer = (): JSX.Element => {
  return (
    <div className="h-fit w-full">
      <div className="h-fit w-full">
        <div className="relative bottom-0 bg-[#121314]">
          <div className="flex h-[94px] w-full flex-row items-center justify-evenly">
            <div className="h-[143px] w-[143px] self-end bg-[url(/assets/logo.svg)] bg-cover bg-[50%_50%]" />
            <div className="whitespace-nowrap font-archivo-black text-[28px] font-normal leading-[24.4px] tracking-[0] text-white">
              © 2023 TYPICAL ARCADE
            </div>
            <a href="https://twitter.com/typicalarcade">
              <img
                className="h-[40px] w-[40px]"
                alt="XLogo"
                src="/assets/landing/x-logo.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
