import { JSX } from 'react';

export const SectionTwo = (): JSX.Element => {
  return (
    <div className="relative flex w-[1516px] items-center justify-center gap-[180px] px-0 py-[80px]">
      <div className="relative inline-flex flex-[0_0_auto] items-center gap-[20px]">
        <div className="relative h-[323px] w-[323px] rounded-[161.5px] bg-[#d9d9d9]" />
      </div>
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="font-archivo-black relative mt-[-1.00px] w-[553px] text-[56px] font-normal leading-[normal] tracking-[0] text-white">
          WEN GAMES?
        </div>
        <p className="font-archivo-regular relative w-[553px] text-[28px] font-normal leading-[normal] tracking-[0] text-white">
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            Soon....There is only two of us right now so games will come as soon
            as we get to them. Stay up to date with announcements by following{' '}
          </span>
          <span className="underline">@typicalaracde</span>
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            {' '}
            on twitter
          </span>
        </p>
      </div>
    </div>
  );
};
