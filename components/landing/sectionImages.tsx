import Image from 'next/image';
import { JSX } from 'react';

type ImageProps = {
  imageClassName: string;
  altSrcTuples: [string, string][];
};

function mapImages({ altSrcTuples, imageClassName }: ImageProps) {
  if (altSrcTuples.length > 0) {
    return altSrcTuples.map(([alt, src]) => (
      <Image
        width={1}
        height={1}
        className={imageClassName}
        alt={alt}
        src={src}
      />
    ));
  }

  return (
    <div className="relative h-[199px] w-[199px] rounded-[161.5px] bg-[#d9d9d9] md:h-[323px] md:w-[323px]" />
  );
}

export const SectionImages = (imageProps: ImageProps): JSX.Element => {
  return (
    <div className="relative inline-flex flex-[0_0_auto] items-start gap-[20px]">
      {mapImages(imageProps)}
    </div>
  );
};
