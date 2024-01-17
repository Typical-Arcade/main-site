'use client';

import Image from 'next/image';
import { JSX } from 'react';

type ImageProps = {
  imageClassName: string;
  altSrcTuples: [string, string][];
};

function mapImages({ altSrcTuples, imageClassName }: ImageProps) {
  if (altSrcTuples.length > 0) {
    return altSrcTuples.map(([alt, src], index) => (
      <Image
        width={400}
        height={400}
        className={`rounded-[25rem] object-cover ${imageClassName}`}
        alt={alt}
        src={src}
        key={`${alt}_${index}`}
      />
    ));
  }

  return (
    <div className="relative h-[20rem] w-[20rem] rounded-[25rem] bg-[#d9d9d9]" />
  );
}

export default function SectionImages(imageProps: ImageProps): JSX.Element {
  return (
    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[2rem]">
      {mapImages(imageProps)}
    </div>
  );
}
