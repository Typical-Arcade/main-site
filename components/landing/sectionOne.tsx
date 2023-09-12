import { JSX } from 'react';

export const SectionOne = (): JSX.Element => {
  return (
    <div className="relative flex w-[1516px] items-center justify-center gap-[180px] px-0 py-[80px]">
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="font-archivo-black relative mt-[-1.00px] w-[553px] text-[56px] font-normal leading-[normal] tracking-[0] text-white">
          WHO DONE IT?
        </div>
        <p className="font-archivo-regular relative w-[553px] text-[28px] font-normal leading-[normal] tracking-[0] text-white">
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            Typical Arcade was started by{' '}
          </span>
          <span className="underline">@poweofthenut</span>
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            {' '}
            and{' '}
          </span>
          <span className="underline">@birddog9000</span>
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            {' '}
            out of the idea of creating games for the Typical Friends ecosystem.
            We love the community and want to be typical community members who
            contribute and take part in its growth.
          </span>
        </p>
      </div>
      <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
        <img
          className="relative h-[247px] w-[247px] object-cover"
          alt="Potn pfp"
          src="/assets/landing/potn.svg"
        />
        <img
          className="relative h-[247px] w-[247px] object-cover"
          alt="Bd pfp"
          src="/assets/landing/birddog.svg"
        />
      </div>
    </div>
  );
};
