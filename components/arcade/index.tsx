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
      if (gameScreen === 1) {
        setGameScreen(gameScreen);
      } else {
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
    <div className="mt-8 flex w-screen flex-col items-center">
      <div className="absolute flex flex-col items-center">
        <Image
          className="w-fit"
          src={arcade}
          alt="arcade-base"
        />
      </div>
      <div className="flex flex-col items-center">
        <Logo className="relative top-[1.6rem] flex h-[130px] flex-col content-center items-center md:top-[6rem] md:h-[400px]" />
        {/* Screen */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="h-[200px] w-[300px] border-[3px] border-black [transform:perspective(45px)_rotateX(1deg)] md:h-[825px] md:w-[1225px] md:[transform:perspective(200px)_rotateX(1deg)]"></div>
          <GameScreen gameScreen={gameScreen}/>
        </div>
      </div>
      <div className="flex w-screen flex-col items-center">
        <div className="flex h-[100px] scale-[0.3] flex-row items-center gap-x-[33rem] md:bottom-10 md:left-[6rem] md:h-[275px] md:scale-100 md:gap-x-[40rem]">
          <Joystick
            className="-translate-x-[50px] -translate-y-[40px] md:-translate-x-[50px] md:translate-y-0"
            state={state}
            setState={setState}
          />
          <div className="flex flex-row justify-between gap-x-[150px] md:-translate-x-[50px]">
            <TopButton text="A" gameScreen={gameScreen}/>
            {/* <TopButton text="B" /> */}
          </div>
        </div>
        {/* <div className="flex w-[85%] translate-y-10 flex-col items-end md:w-1/2 md:basis-1/2 md:translate-y-40">
          <ConnectButton />
        </div> */}
      </div>
    </div>
  );
}
