import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: 'mainImage';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Alternative text — `string`
     *
     * Important for accessibility and SEO
     */
    alt?: string;
  };

  /**
   * Countries — `array`
   *
   *
   */
  countries?: Array<SanityKeyedReference<Country>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Excerpt — `text`
   *
   *
   */
  excerpt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Country
 *
 *
 */
export interface Country extends SanityDocument {
  _type: 'country';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Country Code — `string`
   *
   *
   */
  countryCode?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: 'image';
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Caption — `string`
       *
       *
       */
      caption?: string;

      /**
       * Alternative text — `string`
       *
       * Important for accessibility and SEO
       */
      alt?: string;
    }>
  | SanityKeyed<ImageGrid>
>;

export type ImageGrid = {
  _type: 'imageGrid';
  /**
   * Images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: 'image';
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for accessibility and SEO
       */
      alt?: string;
    }>
  >;
};

export type Documents = Post | Country;
