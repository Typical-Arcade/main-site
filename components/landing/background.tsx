import Image from 'next/image';
import { JSX } from 'react';

import { ClassnameProps } from '../types';

export const Background = ({ className }: ClassnameProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="relative flex w-screen flex-col items-center gap-[100px] overflow-hidden px-0 pb-0 pt-[50px] md:gap-[573px]">
        <div className="relative inset-x-3 top-3">
          <div className="relative -top-10 grid grid-cols-6 gap-x-8 md:-top-5 md:gap-x-10">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`cloud-${i * 10}`}>
                <Image
                  height={1}
                  width={1}
                  className="w-auto md:w-1/2"
                  src="/assets/cloud.svg"
                  alt="cloud"
                />
              </div>
            ))}
          </div>
          <div className="relative left-[12rem] top-10 grid grid-cols-6 gap-x-10">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`cloud-${i * 100}`}>
                <Image
                  height={1}
                  width={1}
                  className="w-[100px] md:w-1/2"
                  src="/assets/cloud.svg"
                  alt="cloud"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[534px] w-screen md:h-[1628px]">
          <Image
            height={1}
            width={1}
            className="top-0 h-[413px] w-screen md:h-[1258px]"
            src="/assets/building.svg"
            alt="building"
          />
        </div>
      </div>
    </div>
  );
};
