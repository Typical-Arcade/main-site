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
    <div className="flex h-full w-screen flex-col items-center">
      <Image className="absolute h-[92rem] w-full" src={arcade} alt="arcade-base" />
      <div className="relative pt-[4rem] flex h-[54rem] w-full flex-col items-center">
        <Logo className="h-[13.5rem]" />
        <div className="absolute top-[16.5rem] h-[33.5rem] w-[50rem] border-[0.2rem] border-black [transform:perspective(6rem)_rotateX(1deg)]"></div>
        <GameScreen
          className="relative top-[0.75rem] h-[30rem] w-[45rem]"
          gameScreen={gameScreen}
        />
      </div>
      <div className="flex h-fit w-[80rem] flex-row items-center justify-around">
        <Joystick
          className="relative bottom-10"
          state={state}
          setState={setState}
        />
        <TopButton
          className="relative bottom-7 self-end"
          text="A"
          gameScreen={gameScreen}
        />
      </div>
    </div>
  );
}
