'use client';

import { JSX, useEffect, useState } from 'react';

import { ClassnameProps } from '../../types';

import { IdleJoystick } from './idle';
import { LeftJoystick } from './left';
import { RightJoystick } from './right';

type JoystickPosition = 'idle' | 'left' | 'right';

export const Joystick = ({ className }: ClassnameProps): JSX.Element => {
  const [state, setState] = useState<JoystickPosition>('idle');

  useEffect(() => {
    if (state !== 'idle') {
      const timeout = setTimeout(() => {
        setState('idle');
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <div className={className}>
      <div className="flex flex-col items-center md:h-[200px] md:w-[300px] md:scale-100">
        <div className="z-10">
          <div className="h-[64px] w-[60px]">
            {state === 'idle' && <IdleJoystick />}
            {state === 'left' && <LeftJoystick />}
            {state === 'right' && <RightJoystick />}
          </div>
        </div>
        <div className="z-0">
          <div className="h-[130px] w-[313px]">
            <div className="relative top-0 rounded-[156.5px/65px]">
              <div className="absolute left-0 top-0 h-[130px] w-[313px] rounded-[156.5px/65px] bg-black">
                <div className="relative left-[36px] top-[9px] h-[104px] w-[241px] rounded-[120.5px/52px] bg-[#181a19]">
                  <div className="relative left-[73px] top-[29px] h-[40px] w-[95px] rounded-[47.5px/20px] bg-black" />
                </div>
              </div>
              <div
                className="absolute left-0 top-0 h-[100px] w-[50%]"
                onClick={() => setState('left')}
              >
                <div className="relative left-[10%] top-[50%]">
                  <div className="inline-block h-[15px] w-[15px] rotate-[225deg] border-r-2 border-t-2 border-solid border-white"></div>
                </div>
              </div>
              <div
                className="absolute left-[156px] top-0 h-[100px] w-[50%]"
                onClick={() => setState('right')}
              >
                <div className="relative left-[80%] top-[50%]">
                  <div className="inline-block h-[15px] w-[15px] rotate-[45deg] border-r-2 border-t-2 border-solid border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
