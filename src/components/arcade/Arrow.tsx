import { JSX, DOMAttributes } from 'react';

export default function Arrow({
  onClick,
}: DOMAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className='h-[2rem] w-[0.9rem]' onClick={onClick}>
      <div className='triangle-button'></div>
    </div>
  );
}