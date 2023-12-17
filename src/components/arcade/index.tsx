'use client';

import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

import arcade from '../../../public/img/arcade.png';
// import { ConnectButton } from './connectButton';
import Logo from '../logo';
import { JoystickPosition } from '../types';

import Arrows from './Arrows';
import GameScreen from './GameScreen';
import TopButton from './TopButton';

const NUMBER_GAME_SCREENS = 2;

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
    <div className="flex h-full w-full flex-col items-center">
      <Image
        className="absolute h-[92rem] w-[65rem]"
        src={arcade}
        alt="arcade-base"
      />
      <div className="relative flex h-[54rem] w-full flex-col items-center pt-[4rem]">
        <Logo className="h-[13.5rem]" />
        <div className="absolute top-[16.5rem] h-[33.5rem] w-[50rem] border-[0.2rem] border-black [transform:perspective(6rem)_rotateX(1deg)]"></div>
        <GameScreen
          className="relative top-[0.75rem] h-[30rem] w-[45rem]"
          gameScreen={gameScreen}
        />
      </div>
      <div className="flex h-fit w-[65rem] flex-row items-center justify-around">
        {/* <Joystick
          className="relative bottom-10"
          state={state}
          setState={setState}
        /> */}
        <Arrows
          className="relative h-[3.8rem] basis-1/2"
          setState={setState}
        />
        <TopButton
          className="relative basis-1/2 translate-y-[0.5rem] flex flex-row justify-center"
          text="A"
          gameScreen={gameScreen}
        />
      </div>
    </div>
  );
}
