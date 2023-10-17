import { PropsWithChildren, JSX } from 'react';

export default function SectionParagraph({ children }: PropsWithChildren): JSX.Element {
  return (
    <p className="relative text-justify font-archivo-regular text-[16px] font-normal leading-[normal] tracking-[0] text-white md:w-[553px] md:text-[28px]">
      {children}
    </p>
  );
}
