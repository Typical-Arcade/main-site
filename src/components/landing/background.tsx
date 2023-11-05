import Image from 'next/image';
import { JSX } from 'react';

import building from '../../../public/img/buildings.png';
import cloud from '../../../public/img/cloud.png';
import { ClassnameProps } from '../types';

const clouds = (length: number) =>
  Array.from({ length }, (_, i) => (
    <Image
      key={`cloud-${i * 10}`}
      className="w-[10rem] lg:w-[15rem]"
      src={cloud}
      alt="cloud"
    />
  ));

export default function Background({ className }: ClassnameProps): JSX.Element {
  return (
    <div className={className}>
      <div className="flex h-full w-full flex-col items-center gap-[15rem] pt-[5rem] lg:gap-[10rem]">
        <div className="relative top-[5rem] h-[50rem] md:inset-x-3 md:top-3">
          <div className="relative -top-[2rem] grid grid-cols-8 md:gap-x-[15rem]">
            {clouds(8)}
          </div>
          <div className="relative left-[6rem] top-[5rem] grid grid-cols-6 md:left-[12rem]">
            {clouds(6)}
          </div>
        </div>
        <div className="h-full w-full">
          <Image className="h-full w-full" src={building} alt="building" />
        </div>
      </div>
    </div>
  );
}
