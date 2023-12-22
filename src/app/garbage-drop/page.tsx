'use client';

import LandscapeWarning from '../../components/LandscapeWarning';
import NavBar from '../../components/Navbar';

export default function GarbageDrop() {
  return (
    <>
      <LandscapeWarning />
      <div className="iphone flex h-screen w-screen flex-col items-center bg-[#111314]">
        <NavBar />
        <iframe
          className="iframe-sizing"
          src="/garbageDrop/index.html"
        />
      </div>
    </>
  );
}
