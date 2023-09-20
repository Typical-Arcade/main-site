'use client';

import { JSX, useState } from 'react';
import { IdleJoystick } from './idle';
import { RightJoystick } from './right';
import { LeftJoystick } from './left';

export const Joystick = (): JSX.Element => {
  const [state, setState] = useState('idle');

  function leftClick() {
    setState('click-left');
    setTimeout(() => {
      setState('idle');
    }, 100);
  }

  function rightClick() {
    setState('click-right');
    setTimeout(() => {
      setState('idle');
    }, 100);
  }

  return (
    <div className="flex h-[200px] w-[300px] flex-col content-start items-center">
      <div className="z-10">
        <div className="h-[64px] w-[60px]">
          {state === 'idle' && <IdleJoystick />}
          {state === 'click-left' && <LeftJoystick />}
          {state === 'click-right' && <RightJoystick />}
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
              onClick={leftClick}
            >
              <div className="relative left-[10%] top-[50%]">
                <div className="inline-block h-[15px] w-[15px] rotate-[225deg] border-r-2 border-t-2 border-solid border-white"></div>
              </div>
            </div>
            <div
              className="absolute left-[156px] top-0 h-[100px] w-[50%]"
              onClick={rightClick}
            >
              <div className="relative left-[80%] top-[50%]">
                <div className="inline-block h-[15px] w-[15px] rotate-[45deg] border-r-2 border-t-2 border-solid border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
