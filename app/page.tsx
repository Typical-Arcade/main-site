import { Arcade } from '../components/arcade';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  Footer,
} from '../components/landing';
import { Background } from '../components/landing/background';
 
export default function Page() {
  return (
    <div className="w-full bg-gradient-to-b from-[#353535] to-[#090c0f]">
      <div className="relative h-full w-full overflow-hidden">
        <div className="flex flex-col items-center">
          <Background />
          <div className="absolute top-[12px] md:top-[24px] flex w-screen items-start justify-center gap-[10px] px-[10px] md:px-0 py-[50px]">
            <Arcade />
          </div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </div>
      <Footer />
    </div>
  );
}
