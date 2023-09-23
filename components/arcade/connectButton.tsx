import { JSX } from 'react';

export const ConnectButton = (): JSX.Element => {
  return (
    <div className="relative inline-flex items-center justify-center gap-[10px] rounded-[50px] border-2 border-solid border-white bg-[#1c1e1c] px-[10px] py-[5px] shadow-[0px_6px_0px_#000000] md:px-[20px] md:py-[10px]">
      <div className="relative mt-[-2.00px] w-fit whitespace-nowrap font-archivo-black text-[12px] leading-[normal] tracking-[0] text-white md:text-[34px]">
        <>CONNECT</>
      </div>
    </div>
  );
};
