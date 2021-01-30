import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import {
  SanityAsset,
  SanityImageSource,
  SanityImageObject,
  SanityReference,
  ImageUrlBuilderOptionsWithAsset,
} from '@sanity/image-url/lib/types/types';
import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { PicoSanity } from 'picosanity';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
};

export type SanityImageDimensions = {
  width: number;
  height: number;
  aspectRatio: number;
};

export type ImageObject = SanityImageSource & {
  alt?: string;
  caption?: string;
};

export const getSanityRefId = (image: ImageObject): string => {
  if (typeof image === 'string') {
    return image;
  }

  const obj = image as SanityImageObject;
  const ref = image as SanityReference;
  const img = image as SanityAsset;

  if (typeof image === 'string') {
    return image;
  }

  if (obj.asset) {
    // eslint-disable-next-line no-underscore-dangle
    return obj.asset._ref || (obj.asset as SanityAsset)._id;
  }

  // eslint-disable-next-line no-underscore-dangle
  return ref._ref || img._id || '';
};

export const custom16by9ImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: ImageUrlBuilderOptionsWithAsset
): ImageUrlBuilder => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder.width(width).height(Math.floor(width * 0.5625));
};

export const getImageDimensions = (
  image: SanityImageSource
): SanityImageDimensions => {
  // eslint-disable-next-line no-underscore-dangle
  const id = getSanityRefId(image);
  const dimensions = id.split('-')[2];
  const [width, height] = dimensions
    .split('x')
    .map((num: string) => parseInt(num, 10));
  const aspectRatio = width / height;
  return { width, height, aspectRatio };
};

export const imageBuilder = (source: SanityImageSource): ImageUrlBuilder =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client: PicoSanity = createClient(config);

export const previewClient: PicoSanity = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview: boolean): PicoSanity =>
  usePreview ? previewClient : client;

export default client;
