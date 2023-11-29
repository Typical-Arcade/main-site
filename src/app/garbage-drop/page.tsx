import NavBar from '../../components/navbar';

export default function GarbageDrop() {
  return (
    <div className="iphone flex h-screen w-screen flex-col items-center bg-gradient-to-b from-[#111314] to-[#111314] bg-cover bg-no-repeat bg-center bg-fixed">
      <NavBar />
      <div className="relative h-full w-full">
        <iframe className="h-full w-full" src="/garbageDrop/index.html" />
      </div>
    </div>
  );
}
