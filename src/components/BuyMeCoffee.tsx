import { JSX, useEffect, useState } from 'react';

const MODEL_TIMEOUT = 3000;

export default function BuyMeCoffee(): JSX.Element {
  const [width, setWidth] = useState('w-[55rem]');
  useEffect(() => {
    const describeBubble = document.getElementById('describe-bubble');
    const timeout = setTimeout(() => {
      if (describeBubble) {
        setWidth('w-fit');
        describeBubble.classList.add('hidden');
      }
    }, MODEL_TIMEOUT);

    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`flex h-[15rem] ${width} flex-row items-center justify-between`}
    >
      <div
        id="describe-bubble"
        className="bubble right flex h-[10rem] w-[40rem] flex-col items-center justify-center self-start bg-white font-archivo-black text-[2rem]"
      >
        Help keep the games running
      </div>
      <a href="https://www.buymeacoffee.com/typicalarcade">
        <button className="h-[10rem] w-[10rem] rounded-[10rem] bg-[#FF5F5F] px-[1.5rem] py-[1rem] font-archivo-black hover:bg-[#e66f5a]">
          <div className="flex h-full w-full items-center justify-center text-[5rem]">
            🎮
          </div>
        </button>
      </a>
    </div>
  );
}
