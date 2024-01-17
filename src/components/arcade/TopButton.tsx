import {
  DOMAttributes,
  HTMLAttributes,
  JSX,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

type Props = {
  gameScreen: number;
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement> &
  DOMAttributes<HTMLDivElement>;

type Action = 'click' | 'hover' | 'idle';

export default function TopButton({
  children,
  className,
  onClick,
}: Props): JSX.Element {
  const [state, setState] = useState<Action>('idle');
  useEffect(() => {
    if (state === 'click') {
      const timeout = setTimeout(() => {
        setState('idle');
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <div className={className}>
      <div className="relative h-[5rem] w-[6.5rem] hover:cursor-pointer">
        <div className="flex flex-col items-center">
          <div
            className={`
              absolute z-10 w-[6rem] rounded-[100%_100%_75%_75%] bg-[#1d1f1d]
              ${state === 'click' ? 'top-[1.3rem] h-[3rem]' : 'top-0 h-[4rem]'}
            `}
          />
          <div
            onClick={(event) => {
              if (onClick) {
                onClick(event);
                setState('click');
              }
            }}
            onMouseOver={() => setState('hover')}
            onMouseOut={() => setState('idle')}
            className={`
              relative z-10 flex h-[3rem] w-[6rem] flex-col items-center justify-center rounded-[100%] border-[0.2rem] border-solid border-white 
              ${state === 'hover' ? 'bg-[#444444]' : 'bg-[#1C1E1C]'}
              ${state === 'click' ? 'top-[1.3rem]' : 'top-0'}
            `}
          >
            <div className="relative top-0 whitespace-nowrap font-archivo-black text-[2rem] leading-[normal] tracking-[0] text-white">
              {children}
            </div>
          </div>
          <div className="relative bottom-[1.5rem] z-0 h-[3rem] w-[6.5rem] rounded-[100%] bg-[#070807]" />
        </div>
      </div>
    </div>
  );
}
