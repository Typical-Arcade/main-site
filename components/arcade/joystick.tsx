import { Dispatch, JSX, SetStateAction } from 'react';

import { ClassnameProps, JoystickPosition } from '../types';

type Props = ClassnameProps & {
  state: string;
  setState: Dispatch<SetStateAction<JoystickPosition>>;
};

export default function Joystick({
  className,
  state,
  setState,
}: Props): JSX.Element {
  return (
    <div className={className}>
      <div className="relative h-[8rem] w-[11rem]">
        <div className="flex h-[8rem] w-[11rem] flex-col items-center">
          <div
            className={`relative z-10 h-[3.8rem] w-[3rem] ${
              state === 'left'
                ? 'right-6 rotate-[-17.50deg]'
                : state === 'right'
                  ? 'left-6 rotate-[17.50deg]'
                  : ''
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="left-0 top-0 z-10 h-[5rem] w-[3rem] rounded-[3rem_3rem_2rem_2rem] bg-black">
                <div className="relative left-[30%] top-[0.25rem] h-[4.5rem] w-[2rem] rounded-[3rem_3rem_2rem_2rem] bg-white">
                  <div className="relative left-[-0.3rem] top-[0.2rem] h-[4.5rem] w-[2rem] rounded-[3rem_3rem_2rem_2rem] bg-black" />
                </div>
              </div>
              <div className="relative bottom-4 z-0 h-[3rem] w-[2.2rem] rounded-bl-[1rem] rounded-br-[1rem] bg-[#121516]">
                <div className="absolute left-[0.1rem] top-0 h-[2.8rem] w-[0.5rem] rounded-bl-[1rem] bg-[#FFFFFF4D]" />
                <div className="absolute left-[70%] top-0 h-[2.8rem] w-[0.5rem] rounded-br-[1rem] bg-white" />
              </div>
            </div>
          </div>
          <div className="relative flex h-[5rem] w-[11rem] flex-col items-center justify-center">
            <div className="absolute h-[5rem] w-[11rem] rounded-[11rem/5rem] bg-black" />
            <div className="absolute h-[4rem] w-[9rem] rounded-[11rem/5rem] bg-[#181a19]" />
            <div className="absolute h-[2rem] w-[4rem] rounded-[45rem/20rem] bg-black" />
            <div className="relative flex h-[5rem] w-[11rem] flex-row">
              <div
                className="flex h-full w-1/2 flex-row items-center pl-2"
                onClick={() => setState('left')}
              >
                <div className="h-[0.5rem] w-[0.5rem] rotate-[225deg] border-r-[0.1rem] border-t-[0.1rem] border-solid border-white" />
              </div>
              <div
                className="left-[50%] flex h-full w-1/2 flex-row items-center justify-end pr-2"
                onClick={() => setState('right')}
              >
                <div className="h-[0.5rem] w-[0.5rem] rotate-[45deg] border-r-[0.1rem] border-t-[0.1rem] border-solid border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
