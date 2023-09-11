import { Joystick } from '../components/arcade/joystick';
import { TopButton } from '../components/arcade/topButton';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  Footer,
} from '../components/landing';
import { Logo } from '../components/logo';

export default function Page() {
  return (
    <div className="h-[250rem] w-full bg-gradient-to-b from-[#353535] to-[#090c0f]">
      <div className="relative h-full w-full overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="flex w-screen flex-col items-center gap-[573px] overflow-hidden px-0 pb-0 pt-[50px]">
            <div className="relative inset-x-3 top-3">
              <div className="relative -top-5 grid grid-cols-6 gap-x-10">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={`cloud-${i * 10}`}>
                    <img className="w-1/2" src="/assets/cloud.svg"></img>
                  </div>
                ))}
              </div>
              <div className="relative left-[12rem] top-10 grid grid-cols-6 gap-x-10">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={`cloud-${i * 100}`}>
                    <img className="w-1/2" src="/assets/cloud.svg"></img>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[1628px] w-screen">
              <img
                className="top-0 h-[1258px] w-screen "
                src="/assets/building.svg"
              ></img>
            </div>
          </div>
          <div className="absolute left-0 top-[24px] flex w-screen items-start justify-center gap-[10px] px-0 py-[50px]">
            <div className="relative w-1/2">
              <div className="relative -top-px left-[-3px] h-[2236px] w-[1521px] bg-[url(/assets/arcadeBase.svg)] bg-center">
                <div className="relative left-[108px] top-px h-[432px] w-[1314px] bg-[url(/assets/arcadeTop.svg)] bg-center">
                  <Logo className="relative top-[6rem] flex content-center justify-center" />
                </div>
                <div className="relative left-[11.5rem] h-fit w-fit">
                  <svg
                    width="1152"
                    height="784"
                    viewBox="0 0 1152 784"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.62256 780.764L25.1739 3.04001L1128.04 6.78808L1148.19 780.764H3.62256Z"
                      stroke="black"
                      strokeWidth="5.6221"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute left-8 top-8 h-fit w-fit">
                    <svg
                      width="1088"
                      height="719"
                      viewBox="0 0 1088 719"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.372559 718.591L20.0499 0.367096H1066.23L1087.78 718.591H0.372559Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[33px] top-[1274px] h-[959px] w-[1462px] bg-[url(/assets/arcadeBottom.svg)] bg-center">
                  <div className="relative left-[1000px] top-[300px] w-fit">
                    <object
                      type="image/svg+xml"
                      data="/assets/connectButton.svg"
                    />
                  </div>
                  <div className="relative left-[160px] h-[177px] w-fit">
                    <Joystick
                      className="relative bottom-[100px] h-fit w-fit"
                      state="idle"
                    />
                    <div className="relative bottom-[200px] left-[850px] flex flex-row gap-x-5">
                      <TopButton
                        className="h-[4.9rem] w-[9.4rem]"
                        stateProp="idle"
                        text="A"
                      />
                      <TopButton
                        className="h-[4.9rem] w-[9.4rem]"
                        stateProp="idle"
                        text="B"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
