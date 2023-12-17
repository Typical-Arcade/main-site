import { JSX } from 'react';

export const MobileMenu = (): JSX.Element => {
  return (
    <div className="relative h-[2rem] w-[5rem]">
      <div className="absolute left-0 top-0 h-[0.4rem] w-[5rem] bg-white" />
      <div className="absolute left-0 top-[1rem] h-[0.4rem] w-[5rem] bg-white" />
      <div className="absolute left-0 top-[2rem] h-[0.4rem] w-[5rem] bg-white" />
    </div>
  );
};
