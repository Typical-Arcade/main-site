import Image from 'next/image';
import { JSX } from 'react';

import garbageDrop from '../../public/assets/gamescreeen/garbageDrop.svg';
import garbageDropTitle from '../../public/assets/gamescreeen/garbageDropTitle.svg';
import instructions from '../../public/assets/gamescreeen/instructions.svg';
import { ClassnameProps } from '../types';

type Props = {
  gameScreen: number;
} & ClassnameProps;

export default function GameScreen({
  gameScreen,
  className,
}: Props): JSX.Element {
  const screens: JSX.Element[] = [
    <>
      <Image alt="mainScreen" src={instructions} />
    </>,
    <>
      <Image className="absolute" alt="garbageDrop" src={garbageDrop} />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Image
          className="absolute w-3/4"
          alt="garbageDrop"
          src={garbageDropTitle}
        />
      </div>
    </>,
  ];

  const chosenScreen = screens[gameScreen];
  return (
    <div className={className}>
      <div className="flex h-full w-full flex-col items-center [transform:perspective(45px)_rotateX(1deg)] md:[transform:perspective(200px)_rotateX(1deg)]">
        {chosenScreen}
      </div>
    </div>
  );
}
