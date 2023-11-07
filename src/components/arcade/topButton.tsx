'use client';

import { JSX, useEffect, useState } from 'react';

import { ClassnameProps } from '../types';

import { games } from './games';

type Props = {
  text: 'A' | 'B';
  gameScreen: number;
} & ClassnameProps;

type Action = 'click' | 'hover' | 'idle';

export default function TopButton({
  text,
  gameScreen,
  className,
}: Props): JSX.Element {
  const [state, setState] = useState<Action>('idle');
  useEffect(() => {
    if (state === 'click') {
      const timeout = setTimeout(() => {
        setState('idle');
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <div
      className={className}
      onClick={() => {
        setState('click');
        const game = games[gameScreen - 1];
        if (game && gameScreen >= 1) {
          window.location.href = games[gameScreen - 1];
        }
      }}
      onMouseOver={() => setState('hover')}
      onMouseOut={() => setState('idle')}
    >
      <div className="relative h-[5rem] w-[6.5rem] hover:cursor-pointer">
        <div className="flex flex-col items-center">
          <div
            className={`
              z-10 absolute w-[6rem] rounded-[100%_100%_75%_75%] bg-[#1d1f1d]
              ${state === 'click' ? 'h-[3rem] top-[1.3rem]' : 'h-[4rem] top-0'}
            `}
          />
          <div
            className={`
              z-10 relative flex h-[3rem] w-[6rem] flex-col items-center justify-center rounded-[100%] border-[0.2rem] border-solid border-white 
              ${state === 'hover' ? 'bg-[#444444]' : 'bg-[#1C1E1C]'}
              ${state === 'click' ? 'top-[1.3rem]' : 'top-0'}
            `}
          >
            <div className="relative top-0 whitespace-nowrap font-archivo-black text-[2rem] leading-[normal] tracking-[0] text-white">
              {text}
            </div>
          </div>
          <div className="z-0 relative bottom-[1.5rem] h-[3rem] w-[6.5rem] rounded-[100%] bg-[#070807]" />
        </div>
      </div>
    </div>
  );
}
