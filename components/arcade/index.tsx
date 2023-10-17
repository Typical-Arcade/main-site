'use client';

import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

import arcade from '../../public/assets/arcade.svg';
// import { ConnectButton } from './connectButton';
import Logo from '../logo';
import { JoystickPosition } from '../types';

import GameScreen from './gameScreen';
import Joystick from './joystick';
import TopButton from './topButton';

const NUMBER_GAME_SCREENS = 1;

export default function Arcade(): JSX.Element {
  const [state, setState] = useState<JoystickPosition>('idle');
  const [gameScreen, setGameScreen] = useState<number>(0);

  useEffect(() => {
    if (state === 'right') {
      if (gameScreen === NUMBER_GAME_SCREENS) {
        setGameScreen(gameScreen);
      } else {
        setGameScreen(gameScreen + 1);
      }
    }
    if (state === 'left') {
      if (gameScreen >= 1) {
        setGameScreen(gameScreen - 1);
      }
    }

    if (state !== 'idle') {
      const timeout = setTimeout(() => {
        setState('idle');
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <div className="flex h-full w-screen flex-col items-center gap-36">
      <Image className="absolute" src={arcade} alt="arcade-base" />
      <div className="relative top-[4%] flex h-[45%] w-1/2 flex-col items-center">
        <Logo className="basis-[30%]" />
        <div className="absolute top-[25%] h-3/4 w-[97%] border-[3px] border-black [transform:perspective(45px)_rotateX(1deg)] md:[transform:perspective(200px)_rotateX(1deg)]"></div>
        <GameScreen className="w-full basis-4/5" gameScreen={gameScreen} />
      </div>
      <div className="flex h-[8%] w-1/2 flex-row items-center justify-center gap-[60%]">
        <Joystick
          className="translate-y-[-15%]"
          state={state}
          setState={setState}
        />
        <TopButton className="scale-x-[-1]" text="A" gameScreen={gameScreen} />
      </div>
    </div>
  );
}
