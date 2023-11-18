import Script from 'next/script';

import NavBar from '../../components/navbar';

export default function GarbageDrop() {
  return (
    <>
      <Script defer={true} src="/garbageDrop/main.bundle.js"></Script>
      <div className="flex h-screen w-screen flex-col items-center">
        <NavBar />
        <div className="relative w-full basis-[96%]">
          <div id="app"></div>
        </div>
      </div>
    </>
  );
}
