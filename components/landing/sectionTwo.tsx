import { JSX } from "react";

export const SectionTwo = (): JSX.Element => {
  return (
    <div className="flex w-[1516px] items-center justify-center gap-[180px] px-0 py-[80px] relative">
      <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
        <div className="relative w-[323px] h-[323px] bg-[#d9d9d9] rounded-[161.5px]" />
      </div>
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-[553px] mt-[-1.00px] [font-family:'Archivo_Black-Regular',_Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[normal]">
          WEN GAMES?
        </div>
        <p className="relative w-[553px] [font-family:'Archivo-Regular',_Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Archivo-Regular',_Helvetica] font-normal text-white text-[28px] tracking-[0]">
            Soon....There is only two of us right now so games will come as soon as we get to them. Stay up to date with
            announcements by following{" "}
          </span>
          <span className="underline">@typicalaracde</span>
          <span className="[font-family:'Archivo-Regular',_Helvetica] font-normal text-white text-[28px] tracking-[0]">
            {" "}
            on twitter
          </span>
        </p>
      </div>
    </div>
  );
};
