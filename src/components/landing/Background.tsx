import Image from 'next/image';
import { HTMLAttributes, JSX } from 'react';

import background from '../../../public/img/buildings.png';
import clouds from '../../../public/img/clouds.png';

export default function Background({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={className}>
      <div className="pt-[3rem]">
        <div className="absolute">
          <Image src={clouds} alt="clouds" priority={true} />
        </div>
        <div className="absolute top-[20rem]">
          <Image src={background} alt="background" priority={true}/>
        </div>
        <div className="absolute top-[20rem]">
          <Image src={clouds} alt="clouds" priority={true}/>
        </div>
      </div>
    </div>
  );
}
