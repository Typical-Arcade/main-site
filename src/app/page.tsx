import Link from 'next/link';

import Arcade from '../components/arcade';
import Background from '../components/landing/background';
import Footer from '../components/landing/footer';
import Section from '../components/landing/section';
import SectionParagraph from '../components/landing/sectionParagraph';

export default async function Page() {
  return (
    <>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="typicalarcade"
        data-description="Support me on Buy me a coffee!"
        data-message="Help keep the games running. Buy me a coffee!"
        data-color="#40DCA5"
        data-position="right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
      <div className="h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-b from-[#181C1D00] from-30% via-[#252627] via-80% to-[#252627] to-100% sm:h-[120rem]" />
        <Background className="absolute w-full md:h-1/2 lg:h-3/4" />
        <div className="absolute h-full w-full bg-gradient-to-b from-[#181C1D00] from-30% via-[#252627] via-80% to-[#252627] to-100% sm:h-[120rem]" />
        <div className="bg-gradient-to-b from-[#353535] to-[#090c0f]">
          <div className="mb-[10rem] flex w-full flex-col items-center">
            <div className="mt-[5rem] h-[120rem] w-full lg:h-[110rem]">
              <Arcade />
            </div>
            <Section
              title="WHO DONE IT?"
              imageClassName="relative h-[25rem] w-[25rem] object-cover"
              altSrcTuples={[
                ['Potn pfp', '/img/landing/potn.png'],
                ['Bd pfp', '/img/landing/birddog.png'],
              ]}
              isReverse={false}
            >
              <SectionParagraph>
                Typical Arcade was started by{' '}
                <Link href="https://twitter.com/powerofthenut">
                  <span className="underline">@powerofthenut</span>
                </Link>{' '}
                and{' '}
                <Link href="https://twitter.com/birddog9000">
                  <span className="underline">@birddog9000</span>
                </Link>{' '}
                out of the idea of creating games for the Typical Friends
                ecosystem. We love the community and want to be typical
                community members who contribute and take part in its growth.
              </SectionParagraph>
            </Section>
            <Section
              title="WEN GAMES?"
              imageClassName="relative h-[25rem] w-[25rem] object-cover"
              altSrcTuples={[['wen pfp', '/img/wen.gif']]}
              isReverse={true}
            >
              <SectionParagraph>
                Soon.... There is only two of us right now so games will come as
                soon as we get to them. Stay up to date with announcements by
                following{' '}
                <Link href="https://twitter.com/typicalarcade">
                  <span className="underline">@typicalarcade</span>
                </Link>{' '}
                on twitter
              </SectionParagraph>
            </Section>
            <Section
              title="TYPICAL FRIENDS"
              imageClassName="relative h-[25rem] w-[25rem] object-cover"
              altSrcTuples={[['Tf pfp', '/img/landing/tf.png']]}
              isReverse={false}
            >
              <SectionParagraph>
                <Link href="https://twitter.com/_typicalfriends">
                  <span className="underline">@_typicalfriends</span>
                </Link>{' '}
                is a-typical web3 studio creating top-tier generative art &amp;
                digital collectibles. Founded by @motionmarkus, we take
                inspiration from his collections to bring you your daily dose of
                mini-games.
              </SectionParagraph>
            </Section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
