import { HTMLAttributes, JSX } from 'react';

import AppLogo from '../AppLogo';

export default function Logo({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={className}>
      <div className="relative inline-flex items-center justify-center gap-[0.625rem]">
        <AppLogo className="h-[8rem] w-[8rem] rounded-[1rem]" />
        <div className="relative flex flex-col items-center">
          <div className="relative w-fit whitespace-nowrap font-archivo-black text-[3rem] font-normal leading-[normal] tracking-[0] text-black">
            TYPICAL ARCADE
          </div>
          <div className="relative w-fit whitespace-nowrap font-archivo-regular text-[1rem] font-normal leading-[normal] tracking-[0] text-black">
            BY POWEROFTHENUT &amp; BIRDDOG9000
          </div>
        </div>
      </div>
    </div>
  );
}
