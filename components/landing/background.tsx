import Image from 'next/image';
import { JSX } from 'react';

import building from '../../public/assets/building.svg';
import cloud from '../../public/assets/cloud.svg';

const clouds = Array.from({ length: 6 }, (_, i) => (
  <div key={`cloud-${i * 10}`}>
    <Image
      className="w-auto md:w-1/2"
      src={cloud}
      alt="cloud"
    />
  </div>
));

export const Background = (): JSX.Element => {
  return (
    <div className='absolute'>
      <div className="relative flex w-screen flex-col items-center gap-[100px] overflow-hidden px-0 pb-0 pt-[50px] md:gap-[573px]">
        <div className="relative inset-x-3 top-3">
          <div className="relative -top-8 grid grid-cols-6 gap-x-8 md:-top-5 md:gap-x-10">
            {clouds}
          </div>
          <div className="relative left-[12rem] top-10 grid grid-cols-6 gap-x-4 md:-top-5 md:gap-x-10">
            {clouds}
          </div>
        </div>
        <div className="relative w-screen">
          <Image
            className="top-0 h-[413px] w-screen md:h-[1258px]"
            src={building}
            alt="building"
          />
        </div>
      </div>
    </div>
  );
};
