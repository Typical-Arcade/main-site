import Link from 'next/link';

import { Arcade } from '../components/arcade';
import { Background } from '../components/landing/background';
import { Footer } from '../components/landing/footer';
import { Section } from '../components/landing/section';
import { SectionParagraph } from '../components/landing/sectionParagraph';

export default function Page() {
  return (
    <div className='h-full'>
      <div className="flex w-screen flex-col items-center bg-gradient-to-b from-[#353535] to-[#090c0f]">
        <Background className="absolute" />
        <Arcade className="mt-8" />
        <Section
          title="WHO DONE IT?"
          imageClassName="relative h-[160.98px] w-[160.98px] object-cover md:h-[247px] md:w-[247px]"
          altSrcTuples={[
            ['Potn pfp', '/assets/landing/potn.svg'],
            ['Bd pfp', '/assets/landing/birddog.svg'],
          ]}
          isReverse={false}
        >
          <SectionParagraph>
            Typical Arcade was started by{' '}
            <Link href="https://twitter.com/powerofthenut">
              <span className="underline">@poweofthenut</span>
            </Link>{' '}
            and{' '}
            <Link href="https://twitter.com/birddog9000">
              <span className="underline">@birddog9000</span>
            </Link>{' '}
            out of the idea of creating games for the Typical Friends ecosystem.
            We love the community and want to be typical community members who
            contribute and take part in its growth.
          </SectionParagraph>
        </Section>
        <Section
          title="WEN GAMES?"
          imageClassName="relative h-[199px] w-[199px] rounded-[161.5px] bg-[#d9d9d9] md:h-[323px] md:w-[323px]"
          altSrcTuples={[]}
          isReverse={true}
        >
          <SectionParagraph>
            Soon.... There is only two of us right now so games will come as soon
            as we get to them. Stay up to date with announcements by following{' '}
            <Link href="https://twitter.com/typicalarcade">
              <span className="underline">@typicalarcade</span>
            </Link>{' '}
            on twitter
          </SectionParagraph>
        </Section>
        <Section
          title="TYPICAL FRIENDS"
          imageClassName="relative h-[199px] w-[199px] object-cover md:h-[323px] md:w-[323px]"
          altSrcTuples={[['Tf pfp', '/assets/landing/tf.svg']]}
          isReverse={false}
        >
          <SectionParagraph>
            <Link href="https://twitter.com/_typicalfriends">
              <span className="underline">@_typicalfriends</span>
            </Link>{' '}
            is a-typical web3 studio creating top-tier generative art &amp;
            digital collectibles. Founded by @motionmarkus, we take inspiration
            from his collections to bring you your daily dose of mini-games.
          </SectionParagraph>
        </Section>
        <Footer className="h-fit w-full" />
      </div>
    </div>
  );
}
