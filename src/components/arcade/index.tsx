import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSX, useState } from 'react';

import arcade from '../../../public/img/arcade.png';
import Logo from '../logo';

import Arrow from './Arrow';
import { games } from './games';
import GameScreen from './GameScreen';
import TopButton from './TopButton';

const NUMBER_GAME_SCREENS = 2;

export default function Arcade(): JSX.Element {
  const router = useRouter();
  const [gameScreen, setGameScreen] = useState<number>(0);

  const rightClick = function() {
    if (gameScreen === NUMBER_GAME_SCREENS) {
      setGameScreen(gameScreen);
    } else {
      setGameScreen(gameScreen + 1);
    }
  };
  const leftClick = function() {
    if (gameScreen >= 1) {
      setGameScreen(gameScreen - 1);
    }
  };
  const selectClick = function() {
    const game = games[gameScreen - 1];
    if (game && gameScreen >= 1) {
      router.push(games[gameScreen - 1]);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <Image
        className="absolute h-[92rem] w-[65rem]"
        src={arcade}
        alt="arcade-base"
      />
      <div className="relative flex h-[54rem] w-full flex-col items-center pt-[4rem]">
        <Logo className="h-[13.5rem]" />
        <div className="absolute top-[16.5rem] h-[33.5rem] w-[50rem] border-[0.2rem] border-black [transform:perspective(6rem)_rotateX(1deg)]"></div>
        <GameScreen
          className="relative top-[0.75rem] h-[30rem] w-[45rem]"
          gameScreen={gameScreen}
        />
      </div>
      <div className="flex h-fit w-[65rem] translate-y-3 flex-row items-center justify-around">
        <div className="flex basis-1/2 flex-row justify-center gap-[2rem]">
          <TopButton
            className="relative flex -scale-x-100 flex-row justify-center"
            onClick={leftClick}
            gameScreen={gameScreen}
          >
            <Arrow />
          </TopButton>
          <TopButton
            className="relative flex flex-row justify-center"
            onClick={rightClick}
            gameScreen={gameScreen}
          >
            <Arrow />
          </TopButton>
        </div>
        <TopButton
          className="relative flex basis-1/2 flex-row justify-center"
          gameScreen={gameScreen}
          onClick={selectClick}
        >
          <>{'A'}</>
        </TopButton>
      </div>
    </div>
  );
}
