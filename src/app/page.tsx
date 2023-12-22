import Link from 'next/link';

import Arcade from '../components/arcade';
import BuyMeCoffee from '../components/BuyMeCoffee';
import Background from '../components/landing/Background';
import Footer from '../components/landing/Footer';
import Section from '../components/landing/Section';
import SectionParagraph from '../components/landing/SectionParagraph';

export default function HomePage() {
  return (
    <div className="iphone bg-gradient-to-b from-[#353535] from-0% to-[#212325] to-20% bg-cover bg-fixed bg-center bg-no-repeat">
      <Background className="absolute w-full" />
      <div className="mb-[10rem] flex w-full flex-col items-center">
        <div className="mt-[5rem] h-[100rem] w-full">
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
            out of the idea of creating games for the Typical Friends ecosystem.
            We love the community and want to be typical community members who
            contribute and take part in its growth.
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
            digital collectibles. Founded by @motionmarkus, we take inspiration
            from his collections to bring you your daily dose of mini-games.
          </SectionParagraph>
        </Section>
      </div>
      <Footer />
      <div className="fixed bottom-[10rem] right-[3rem] z-50">
        <BuyMeCoffee />
      </div>
    </div>
  );
}
