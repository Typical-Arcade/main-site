import { PropsWithChildren, JSX } from 'react';

import SectionImages from './SectionImages';

type Props = {
  imageClassName: string;
  altSrcTuples: [string, string][];
  title: string;
  isReverse: boolean;
};

export default function Section({
  title,
  children,
  imageClassName,
  altSrcTuples,
  isReverse,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div
      className={`relative flex w-screen md:w-3/4 lg:w-1/2 flex-col items-center justify-center gap-[4rem] px-[1.5rem] py-[5rem] ${
        isReverse ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[2rem]">
        <div className="relative mt-[-0.1rem] font-archivo-black text-[4rem] font-normal leading-[normal] tracking-[0] text-white">
          {title}
        </div>
        {children}
      </div>
      <div className="relative inline-flex items-start gap-[2rem]">
        <SectionImages
          altSrcTuples={altSrcTuples}
          imageClassName={imageClassName}
        />
      </div>
    </div>
  );
}
