import { JSX } from 'react';

import { Logo } from '../logo';
import { ConnectButton } from './connectButton';
import { Joystick } from './joystick';
import { TopButton } from './topButton';

export const Arcade = (): JSX.Element => {
  return (
    <div className="relative -top-px left-[-3px] h-[2236px] w-[1521px] bg-[url(/assets/arcadeBase.svg)] bg-center">
      <div className="relative left-[108px] top-px h-[432px] w-[1314px] bg-[url(/assets/arcadeTop.svg)] bg-center">
        <Logo className="relative top-[6rem] flex content-center justify-center" />
      </div>
      <div className="relative left-[11.5rem] h-fit w-fit">
        <svg
          width="1152"
          height="784"
          viewBox="0 0 1152 784"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.62256 780.764L25.1739 3.04001L1128.04 6.78808L1148.19 780.764H3.62256Z"
            stroke="black"
            strokeWidth="5.6221"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-8 top-8 h-fit w-fit">
          <svg
            width="1088"
            height="719"
            viewBox="0 0 1088 719"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.372559 718.591L20.0499 0.367096H1066.23L1087.78 718.591H0.372559Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="absolute left-[33px] top-[1274px] h-[959px] w-[1462px] bg-[url(/assets/arcadeBottom.svg)] bg-center">
        <div className="relative left-0 top-7 h-[180px] w-full">
          <div className="relative bottom-10 left-[6rem] flex h-[180px] w-full flex-row items-center gap-x-[40rem]">
            <Joystick />
            <div className="relative top-6 flex flex-row gap-x-5">
              <TopButton
                className="h-[4.9rem] w-[9.4rem]"
                stateProp="idle"
                text="A"
              />
              <TopButton
                className="h-[4.9rem] w-[9.4rem]"
                stateProp="idle"
                text="B"
              />
            </div>
          </div>
        </div>
        <div className="relative left-[1060px] top-[100px] w-fit">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};
