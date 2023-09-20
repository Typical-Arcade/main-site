import Link from 'next/link';
import { JSX } from 'react';

export const SectionTwo = (): JSX.Element => {
  return (
    <div className="relative flex w-screen flex-col-reverse items-center justify-center gap-[40px] px-[15px] py-[50px] md:w-[1516px] md:flex-row md:gap-[180px] md:px-0 md:py-[80px]">
      <div className="relative inline-flex flex-[0_0_auto] items-center gap-[20px]">
        <div className="relative h-[199px] w-[199px] rounded-[161.5px] bg-[#d9d9d9] md:h-[323px] md:w-[323px]" />
      </div>
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="relative mt-[-1.00px] w-full font-archivo-black text-[32px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[56px]">
          WEN GAMES?
        </div>
        <p className="relative text-justify font-archivo-regular text-[16px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[28px]">
          Soon.... There is only two of us right now so games will come as soon
          as we get to them. Stay up to date with announcements by following{' '}
          <Link href="https://twitter.com/typicalarcade">
            <span className="underline">@typicalarcade</span>
          </Link>{' '}
          on twitter
        </p>
      </div>
    </div>
  );
};
