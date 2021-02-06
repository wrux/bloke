import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import {
  client,
  getSanityRefId,
  getImageDimensions,
  imageBuilder,
  ImageObject,
} from '../../lib/sanity';
import styles from './imageGrid.module.css';

type Props = {
  node: {
    images: ImageObject[];
  };
};

const GridImage: React.FC<{ image: ImageObject; sizes?: string }> = ({
  image,
  sizes,
}) => (
  <Image
    {...useNextSanityImage(client, image)}
    sizes={sizes}
    alt={image.alt}
    layout="responsive"
    className="bg-gray-100"
  />
);

const ImageGridBlock: React.FC<Props> = ({ node }) => {
  const { images } = node;

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length < 5) {
    return (
      <div
        className={classnames('grid', 'gap-3 sm:gap-6 md:gap-8', {
          'grid-cols-2': images.length % 2 === 0,
          'sm:grid-cols-3': images.length === 3,
        })}
      >
        {images.map((image: ImageObject) => (
          <div key={getSanityRefId(image)}>
            <GridImage
              image={image}
              sizes={
                images.length % 2 === 0
                  ? '(max-width: 767px) 50vw, (max-width: 1023px) 384px, (max-width: 1279px) 448px, 512px'
                  : '(max-width: 639px) 100vw, (max-width: 799px) 33vw, (max-width: 1023px) 245px, (max-width: 1279px) 288px, 330px'
              }
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.masonry}>
      {images.map((image: ImageObject) => {
        const { width, height } = getImageDimensions(image);
        const scaledHeight = Math.floor((500 / width) * height);
        return (
          <img
            // eslint-disable-next-line no-underscore-dangle
            key={getSanityRefId(image)}
            src={imageBuilder(image).width(500).height(scaledHeight).url()}
            alt={image.alt ?? ''}
            width={500}
            height={scaledHeight}
            loading="lazy"
            className="bg-gray-100"
          />
        );
      })}
    </div>
  );
};

export default ImageGridBlock;
