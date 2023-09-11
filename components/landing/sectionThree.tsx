import { JSX } from "react";

export const SectionThree = (): JSX.Element => {
  return (
    <div className="flex w-[1516px] items-center justify-center gap-[180px] px-0 py-[80px] relative">
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-[553px] mt-[-1.00px] [font-family:'Archivo_Black-Regular',_Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[normal]">
          TYPICAL FRIENDS
        </div>
        <p className="relative w-[553px] [font-family:'Archivo-Regular',_Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
          <span className="underline">@_typicalfriends</span>
          <span className="[font-family:'Archivo-Regular',_Helvetica] font-normal text-white text-[28px] tracking-[0]">
            {" "}
            is a-typical web3 studio creating top-tier generative art &amp; digital collectibles. Founded by
            @motionmarkus, we take inspiration from his collections to bring you your daily dose of mini-games.
          </span>
        </p>
      </div>
      <div className="inline-flex items-start gap-[20px] relative flex-[0_0_auto]">
        <img className="relative w-[323px] h-[323px] object-cover" alt="Tf pfp" src="/assets/landing/tf.svg" />
      </div>
    </div>
  );
};
