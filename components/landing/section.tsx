import { PropsWithChildren, JSX } from 'react';
import { SectionImages } from './sectionImages';

type Props = {
  imageClassName: string;
  altSrcTuples: [string, string][];
  title: string;
  isReverse: boolean;
};

export const Section = ({
  title,
  children,
  imageClassName,
  altSrcTuples,
  isReverse,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      className={`relative flex w-screen flex-col items-center justify-center gap-[40px] px-[15px] py-[50px] md:w-[1516px] ${
        isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } md:gap-[180px] md:px-0 md:py-[80px]`}
    >
      <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-[16px]">
        <div className="relative mt-[-1.00px] font-archivo-black text-[32px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[56px]">
          {title}
        </div>
        {children}
      </div>
      <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
        <SectionImages
          altSrcTuples={altSrcTuples}
          imageClassName={imageClassName}
        />
      </div>
    </div>
  );
};
