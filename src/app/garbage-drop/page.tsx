import NavBar from '../../components/navbar';

export default function GarbageDrop() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <NavBar />
      <div className="relative w-full basis-[96%]">
        <iframe
          className="relative h-full w-full"
          src="/garbage-drop/index.html"
        />
      </div>
    </div>
  );
}
