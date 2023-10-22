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
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="z-10 flex w-[30rem] flex-col items-center justify-center">
          <Image alt="garbageDrop" src={garbageDropTitle} />
        </div>
        <div className="z-0 absolute">
          <Image alt="garbageDrop" src={garbageDrop} />
        </div>
      </div>
    </>,
  ];

  const chosenScreen = screens[gameScreen];
  return (
    <div className={className}>
      <div className="relative h-full w-full [transform:perspective(6rem)_rotateX(1deg)]">
        {chosenScreen}
      </div>
    </div>
  );
}
