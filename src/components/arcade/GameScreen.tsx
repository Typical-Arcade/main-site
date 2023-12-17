import Image from 'next/image';
import { JSX } from 'react';

import comingSoon from '../../../public/img/gamescreeen/coming-soon.png';
import garbageDrop from '../../../public/img/gamescreeen/gdrop.png';
import instructions from '../../../public/img/gamescreeen/instructions.png';
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
      <Image alt="garbageDrop" src={garbageDrop} />
    </>,
    <>
      <Image alt="garbageDrop" src={comingSoon} />
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
