'use client';

import { JSX, useEffect, useState } from 'react';

type Props = {
  text: 'A' | 'B';
};

type Action = 'click' | 'hover' | 'idle';

export const TopButton = ({
  text,
}: Props): JSX.Element => {
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
      onClick={() => setState('click')}
      onMouseOver={() => setState('hover')}
      onMouseOut={() => setState('idle')}
    >
      <div
        className={`relative ${
          state === 'click' ? 'top-[12px]' : 'top-[-2px]'
        } ${state === 'click' ? 'h-[47px]' : 'h-[61px]'}`}
      >
        <div
          className={`absolute left-0 h-[42px] w-[107px] rounded-[53.5px/21px] bg-[#070807] ${
            state === 'click' ? 'top-[5px]' : 'top-[19px]'
          }`}
        />
        <div
          className={`absolute left-[9px] top-0 h-[36px] w-[89px] rounded-[44.5px/18px] border-2 border-solid border-white ${
            state === 'hover' ? 'bg-[#444444]' : 'bg-[#1c1e1c]'
          }`}
        />
        <div className="absolute left-[44px] top-[1px] whitespace-nowrap font-archivo-black text-[24.4px] leading-[normal] tracking-[0] text-white">
          {text}
        </div>
      </div>
    </div>
  );
};
