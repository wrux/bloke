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

export const imageBuilder = (source) =>
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
