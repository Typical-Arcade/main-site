import { JSX, HTMLAttributes, Dispatch, SetStateAction } from 'react';

import { JoystickPosition } from '../types';

import Arrow from './Arrow';

type Props = {
  setState: Dispatch<SetStateAction<JoystickPosition>>;
};

export default function Arrows({
  className,
  setState,
}: Props & HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={className}>
      <div className="flex flex-row items-center justify-center gap-[2rem]">
        <Arrow className="z-20 -scale-x-100" onClick={() => setState('left')} />
        <Arrow className="z-20" onClick={() => setState('right')} />
      </div>
    </div>
  );
}
