import Link from 'next/link';
import { JSX } from 'react';

export const SectionOne = (): JSX.Element => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center gap-[40px] px-[15px] py-[50px] md:w-[1516px] md:flex-row md:gap-[180px] md:px-0 md:py-[80px]">
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="relative mt-[-1.00px] font-archivo-black text-[32px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[56px]">
          WHO DONE IT?
        </div>
        <p className="relative text-justify font-archivo-regular text-[16px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[28px]">
          Typical Arcade was started by{' '}
          <Link href="https://twitter.com/powerofthenut">
            <span className="underline">@poweofthenut</span>
          </Link>{' '}
          and{' '}
          <Link href="https://twitter.com/birddog9000">
            <span className="underline">@birddog9000</span>
          </Link>{' '}
          out of the idea of creating games for the Typical Friends ecosystem.
          We love the community and want to be typical community members who
          contribute and take part in its growth.
        </p>
      </div>
      <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
        <img
          className="relative h-[160.98px] w-[160.98px] object-cover md:h-[247px] md:w-[247px]"
          alt="Potn pfp"
          src="/assets/landing/potn.svg"
        />
        <img
          className="relative h-[160.98px] w-[160.98px] object-cover md:h-[247px] md:w-[247px]"
          alt="Bd pfp"
          src="/assets/landing/birddog.svg"
        />
      </div>
    </div>
  );
};
