'use client';

import NavBar from '../../components/Navbar';

export default function GarbageDrop() {
  return (
    <>
      <div className="mobile flex h-screen w-screen flex-col items-center bg-[#111314]">
        <NavBar />
        <iframe
          className="iframe-sizing"
          src="/garbageDrop/index.html"
        />
      </div>
    </>
  );
}
