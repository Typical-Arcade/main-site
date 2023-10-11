import Image from 'next/image';
import { JSX } from 'react';

import garbageDrop from '../../public/assets/gamescreeen/garbageDrop.svg';
import garbageDropTitle from '../../public/assets/gamescreeen/garbageDropTitle.svg';
import instructions from '../../public/assets/gamescreeen/instructions.svg';

type Props = {
  gameScreen: number;
};

export const GameScreen = ({ gameScreen }: Props): JSX.Element => {
  const screens: JSX.Element[] = [
    <>
      <Image
        className="h-full w-full"
        alt="garbageDrop"
        src={instructions}
      />
    </>,
    <>
      <Image
        className="h-full w-full absolute"
        alt="garbageDrop"
        src={garbageDrop}
      />
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <Image
          className="w-3/4 absolute"
          alt="garbageDrop"
          src={garbageDropTitle}
        />
      </div>
    </>,
  ];

  const chosenScreen = screens[gameScreen];
  return (
    <div className="absolute h-[175px] w-[300px] [transform:perspective(45px)_rotateX(1deg)] md:h-[775px] md:w-[1175px] md:[transform:perspective(200px)_rotateX(1deg)]">
      {chosenScreen}
    </div>
  );
};
