import NavBar from '../../components/navbar';

export default function GarbageDrop() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <NavBar />
      <div className="relative w-full basis-[91%]">
        <iframe className="h-full w-full" src="/garbageDrop/index.html" />
      </div>
    </div>
  );
}
