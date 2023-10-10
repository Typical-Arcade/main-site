import Image from 'next/image';
import { JSX } from 'react';

type Props = {
  gameScreen: number;
};

export const GameScreen = ({ gameScreen }: Props): JSX.Element => {
  const screenChosen: JSX.Element[] = [
    <div className="flex h-full flex-col items-center justify-center gap-3 md:gap-16 font-archivo-black text-white">
      <span className="text-center text-4xl md:text-9xl">GM</span>
      <span className="text-center text-xl md:text-5xl">MOVE JOYSTICK TO SELECT GAME</span>
      <span className="text-center text-xl md:text-5xl">PRESS A TO START</span>
    </div>,
    <>
      <Image
        width={500}
        height={500}
        className="h-full w-full"
        alt="garbageDrop"
        src="/assets/gamescreeen/garbageDrop.svg"
      />
    </>,
  ];
  return screenChosen[gameScreen];
};
