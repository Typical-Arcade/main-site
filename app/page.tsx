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
    <div className="h-[250rem] w-full bg-gradient-to-b from-[#353535] to-[#090c0f]">
      <div className="relative h-full w-full overflow-hidden">
        <div className="flex flex-col items-center">
          <Background />
          <div className="absolute left-0 top-[24px] flex w-screen items-start justify-center gap-[10px] px-0 py-[50px]">
            <div className="relative w-1/2">
              <Arcade />
            </div>
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
