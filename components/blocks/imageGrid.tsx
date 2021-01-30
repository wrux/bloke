import React from 'react';
import {
  getSanityRefId,
  getImageDimensions,
  imageBuilder,
  ImageObject,
} from '../../lib/sanity';
import styles from './imageGrid.module.css';

type Props = {
  node: {
    images: any[];
  };
};

const ImageGridBlock: React.FC<Props> = ({ node }) => {
  const { images } = node;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.imagegrid}>
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
          />
        );
      })}
    </div>
  );
};

export default ImageGridBlock;
