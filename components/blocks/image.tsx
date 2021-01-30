import React from 'react';
import Image from 'next/image';
import {
  getImageDimensions,
  imageBuilder,
  ImageObject,
} from '../../lib/sanity';

type Props = {
  node: {
    alt?: string;
    asset: ImageObject;
    caption?: string;
  };
};

const ImageBlock: React.FC<Props> = ({ node }) => {
  const { alt, asset, caption } = node;
  const { width, height } = getImageDimensions(asset);
  const scaledHeight = Math.floor((1056 / width) * height);

  return (
    <figure>
      <Image
        src={imageBuilder(asset).width(1056).height(scaledHeight).url()}
        alt={alt ?? ''}
        width={1056}
        height={scaledHeight}
        loading="lazy"
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
