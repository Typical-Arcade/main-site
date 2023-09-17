import { JSX } from 'react';

export const IdleJoystick = (): JSX.Element => {
  return (
    <div className="flex h-[200px] w-[300px] flex-col content-start items-center">
      <div className="z-10">
        <div className="relative h-[64px] w-[60px]">
          <div className="absolute left-[5px] top-[61px] h-[65px] w-[53px] rounded-[0px_0px_13px_0px] bg-[#121516]">
            <div className="absolute left-[41px] top-0 h-[62px] w-[9px] rounded-[0px_0px_13px_0px] bg-white" />
            <div className="absolute left-[3px] top-0 h-[62px] w-[9px] rotate-180 rounded-[0px_0px_13px_0px] bg-white opacity-30" />
          </div>
          <div className="absolute left-0 top-0 h-[80px] w-[60px] rounded-[31px_31px_17px_17px] bg-black">
            <div className="relative left-[3px] top-[4px] h-[86px] w-[54px] rounded-[31px_31px_17px_17px] bg-white">
              <div className="relative top-px h-[85px] w-[49px] rounded-[31px_31px_7px_15px] bg-black" />
            </div>
          </div>
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
            <div className="absolute left-0 top-0 h-[100px] w-[50%]">
              <div className="relative left-[10%] top-[50%]">
                <div className="inline-block h-[15px] w-[15px] rotate-[225deg] border-r-2 border-t-2 border-solid border-white"></div>
              </div>
            </div>
            <div className="absolute left-[156px] top-0 h-[100px] w-[50%]">
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
