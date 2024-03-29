import { client, customImageBuilder, ImageObject } from '@lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

type Props = {
  node: {
    alt?: string;
    asset: ImageObject;
    caption?: string;
  };
};

const ImageBlock: React.FC<Props> = ({ node }) => {
  const { alt, asset, caption } = node;
  const imageProps = useNextSanityImage(client, asset, {
    imageBuilder: customImageBuilder,
  });
  return (
    <figure>
      <Image
        {...imageProps}
        sizes="(max-width: 799px) 100vw, (max-width: 1023) 800px, (max-width: 1279) 928px, 1056px"
        alt={alt ?? ''}
        className="bg-gray-300"
      />
      {caption && (
        <figcaption className="px-5 sm:px-12 md:px-16 lg:px-32 xl:px-48">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageBlock;
