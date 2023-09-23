import { JSX } from 'react';

interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className="relative inline-flex items-center justify-center gap-[10px] md:gap-[120px]">
        <img
          className="relative h-[40px] w-[40px] object-cover md:h-[183.66px] md:w-[183.66px]"
          alt="App store"
          src="/assets/logo.svg"
        />
        <div className="relative flex flex-col items-center">
          <div className="relative w-fit whitespace-nowrap font-archivo-black text-[1rem] font-normal leading-[normal] tracking-[0] text-black md:text-[75px]">
            TYPICAL ARCADE
          </div>
          <div className="relative w-fit whitespace-nowrap font-archivo-regular text-[0.5rem] font-normal leading-[normal] tracking-[0] text-black md:text-[24.4px]">
            BY POWEROFTHENUT &amp; BIRDDOG9000
          </div>
        </div>
      </div>
    </div>
  );
};
