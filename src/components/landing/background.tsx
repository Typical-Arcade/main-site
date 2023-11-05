import Image from 'next/image';
import { JSX } from 'react';

import background from '../../../public/img/buildings.png';
import clouds from '../../../public/img/clouds.png';
import { ClassnameProps } from '../types';

export default function Background({ className }: ClassnameProps): JSX.Element {
  return (
    <div className={className}>
      <div className="pt-[3rem]">
        <div className="absolute">
          <Image src={clouds} alt="clouds" />
        </div>
        <div className="absolute top-[20rem]">
          <Image src={background} alt="background" />
        </div>
        <div className="absolute top-[20rem]">
          <Image src={clouds} alt="clouds" />
        </div>
      </div>
    </div>
  );
}
