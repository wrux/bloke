import { FC } from 'react';
import Img from 'next/image';
import { SanityImageAssetDocument } from '@sanity/client';
import { customImageBuilder } from 'lib/sanity';
import { getClient } from 'lib/sanity.server';
import { useNextSanityImage } from 'next-sanity-image';

type ImageProps = {
  alt?: string;
  asset: SanityImageAssetDocument;
  imageBuilder?: any;
  layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic';
  sizes?: string;
};

const Image: FC<ImageProps> = ({
  asset,
  imageBuilder = customImageBuilder,
  layout = 'responsive',
  sizes,
}) => {
  const imageProps = useNextSanityImage(getClient(), asset, {
    imageBuilder,
  });
  if (!imageProps) return null;
  return (
    <Img {...imageProps} layout={layout} sizes={sizes} objectFit="cover" />
  );
};

export default Image;
