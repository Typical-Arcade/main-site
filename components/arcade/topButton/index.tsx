'use client';

import PropTypes from 'prop-types';
import { JSX } from 'react';
import { useReducer } from 'react';

interface Props {
  className: any;
  stateProp: 'click' | 'hover' | 'idle';
  text: 'A' | 'B';
}

export const TopButton = ({
  stateProp,
  text,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || 'idle',
  });

  return (
    <div
      className={className}
      onClick={() => {
        dispatch('click');
      }}
      onMouseOver={() => {
        dispatch('hover');
      }}
      onMouseOut={() => {
        dispatch('idle');
      }}
    >
      <div
        className={`relative ${
          state.state === 'click' ? 'top-[12px]' : 'top-[-2px]'
        } ${state.state === 'click' ? 'h-[47px]' : 'h-[61px]'}`}
      >
        <div
          className={`absolute left-0 h-[42px] w-[107px] rounded-[53.5px/21px] bg-[#070807] ${
            state.state === 'click' ? 'top-[5px]' : 'top-[19px]'
          }`}
        />
        <div
          className={`absolute left-[9px] top-0 h-[36px] w-[89px] rounded-[44.5px/18px] border-2 border-solid border-white ${
            state.state === 'hover' ? 'bg-[#444444]' : 'bg-[#1c1e1c]'
          }`}
        />
        <div className="absolute left-[44px] top-[1px] whitespace-nowrap text-[24.4px] leading-[normal] tracking-[0] text-white font-archivo-black">
          {text}
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case 'click':
      return {
        ...state,
        state: 'click',
      };
    case 'hover':
      return {
        ...state,
        state: 'hover',
      };
    case 'idle':
      return {
        ...state,
        state: 'idle',
      };
  }

  return state;
}

TopButton.propTypes = {
  stateProp: PropTypes.oneOf(['click', 'hover', 'idle']),
};
