import { JSX } from 'react';

export const SectionThree = (): JSX.Element => {
  return (
    <div className="relative flex w-[1516px] items-center justify-center gap-[180px] px-0 py-[80px]">
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="relative mt-[-1.00px] w-[553px] font-archivo-black text-[56px] font-normal leading-[normal] tracking-[0] text-white">
          TYPICAL FRIENDS
        </div>
        <p className="relative w-[553px] font-archivo-regular text-[28px] font-normal leading-[normal] tracking-[0] text-white">
          <a href="https://twitter.com/_typicalfriends">
            <span className="underline">@_typicalfriends</span>
          </a>
          <span className="font-archivo-regular text-[28px] font-normal tracking-[0] text-white">
            {' '}
            is a-typical web3 studio creating top-tier generative art &amp;
            digital collectibles. Founded by @motionmarkus, we take inspiration
            from his collections to bring you your daily dose of mini-games.
          </span>
        </p>
      </div>
      <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
        <img
          className="relative h-[323px] w-[323px] object-cover"
          alt="Tf pfp"
          src="/assets/landing/tf.svg"
        />
      </div>
    </div>
  );
};
