import { PropsWithChildren, JSX } from 'react';

export default function SectionParagraph({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <p className="relative text-justify font-archivo-regular text-[3rem] font-normal leading-[normal] tracking-[0] text-white">
      {children}
    </p>
  );
}
