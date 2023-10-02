import { JSX } from 'react';

export const RightJoystick = (): JSX.Element => {
  return (
    <div className="rotate-[17.50deg]">
      <div className="relative left-6 h-[64px]">
        <div className="absolute left-[5px] top-[61px] h-[65px] w-[53px] rounded-br-[13px] bg-[#121516]">
          <div className="absolute left-[41px] top-0 h-[62px] w-[9px] rounded-br-[13px] bg-white" />
          <div className="absolute left-[3px] top-0 h-[62px] w-[9px] rotate-180 rounded-br-[13px] bg-white opacity-30" />
        </div>
        <div className="absolute left-0 top-0 h-[80px] w-[60px] rounded-[31px_31px_17px_17px] bg-black">
          <div className="relative left-[3px] top-[4px] h-[86px] w-[54px] rounded-[31px_31px_17px_17px] bg-white">
            <div className="relative top-px h-[85px] w-[49px] rounded-[31px_31px_7px_15px] bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
