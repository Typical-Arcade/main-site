import Link from 'next/link';
import { JSX } from 'react';

export const SectionThree = (): JSX.Element => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center gap-[40px] px-[15px] py-[50px] md:w-[1516px] md:flex-row md:gap-[180px] md:px-0 md:py-[100px]">
      <div className="relative inline-flex w-full flex-[0_0_auto] flex-col items-start gap-[16px] md:w-auto">
        <div className="relative mt-[-1.00px] w-full font-archivo-black text-[32px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[56px]">
          TYPICAL FRIENDS
        </div>
        <p className="relative text-justify font-archivo-regular text-[16px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[28px]">
          <Link href="https://twitter.com/_typicalfriends">
            <span className="underline">@_typicalfriends</span>
          </Link>{' '}
          is a-typical web3 studio creating top-tier generative art &amp;
          digital collectibles. Founded by @motionmarkus, we take inspiration
          from his collections to bring you your daily dose of mini-games.
        </p>
      </div>
      <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
        <img
          className="relative h-[199px] w-[199px] object-cover md:h-[323px] md:w-[323px]"
          alt="Tf pfp"
          src="/assets/landing/tf.svg"
        />
      </div>
    </div>
  );
};
