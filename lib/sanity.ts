import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import {
  SanityAsset,
  SanityImageObject,
  SanityImageSource,
  SanityReference,
} from '@sanity/image-url/lib/types/types';
import { Slug } from '@sanity/types';
import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { UseNextSanityImageBuilderOptions } from 'next-sanity-image';
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

export const urlResolver = (type: string, slug: Slug): string => {
  if (type === 'country') {
    return `/country/${slug.current}`;
  }
  if (type === 'post') {
    return `/post/${slug.current}`;
  }
  return '/';
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
  options: UseNextSanityImageBuilderOptions
): ImageUrlBuilder => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder
    .width(width)
    .height(Math.floor(width * 0.5625))
    .format('webp');
};

export const customImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
): ImageUrlBuilder => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder
    .width(width)
    .height(Math.floor(width / options.originalImageDimensions.aspectRatio))
    .format('webp');
};

export const getImageDimensions = (
  image: SanityImageSource
): SanityImageDimensions => {
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

export const getClient = (usePreview = false): PicoSanity =>
  usePreview ? previewClient : client;

export const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    }
    slugs.add(post.slug);
    return true;
  });
};

export default client;
