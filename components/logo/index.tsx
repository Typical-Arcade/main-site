import { JSX } from 'react';

interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className="relative inline-flex items-center justify-center gap-[120px]">
        <img
          className="relative h-[183.66px] w-[183.66px] object-cover"
          alt="App store"
          src="/assets/logo.svg"
        />
        <div className="relative flex flex-col items-center">
          <div className="relative w-fit whitespace-nowrap text-[75px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Archivo_Black-Regular',_Helvetica]">
            TYPICAL ARCADE
          </div>
          <div className="relative w-fit whitespace-nowrap text-[24.4px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Archivo-Regular',_Helvetica]">
            BY POWEROFTHENUT &amp; BIRDDOG9000
          </div>
        </div>
      </div>
    </div>
  );
};
