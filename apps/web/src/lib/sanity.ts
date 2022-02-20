import {
  ImageUrlBuilder,
  UseNextSanityImageBuilderOptions,
} from 'next-sanity-image';
import {
  createCurrentUserHook,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { config } from './config';

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) =>
  createImageUrlBuilder(config).format('webp').image(source);

/**
 * Helper function for loading low resoution placeholder images.
 **/
export const placeholderImage = (source) =>
  createImageUrlBuilder(config)
    .width(100)
    .height(100)
    .format('webp')
    .image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

// Pull images from the CDN in 16:9 aspect ratio.
export const custom16by9ImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
) => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder
    .width(width)
    .height(Math.floor(width * 0.5625))
    .format('webp');
};

// Pull images from the CDN in 1:1 aspect ratio.
export const customSquareBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
) => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder.width(width).height(Math.floor(width)).format('webp');
};

// Ensure webp images are served.
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
