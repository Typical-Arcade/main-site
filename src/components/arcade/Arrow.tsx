import { JSX, HTMLAttributes, DOMAttributes } from 'react';

export default function Arrow({
  className,
  onClick,
}: HTMLAttributes<HTMLDivElement> & DOMAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={`w-[6rem] h-[6rem] ${className ?? ''}`} onClick={onClick}>
      <div className='triangle-button'></div>
    </div>
  );
}