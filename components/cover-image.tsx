import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { imageBuilder, getImageDimensions } from '../lib/sanity';

type Props = {
  title: string;
  imageObject: any;
  width?: number;
  slug?: string;
  priority?: boolean;
};

const CoverImage: React.FC<Props> = ({
  title,
  imageObject,
  width = 600,
  slug = null,
  priority = false,
}) => {
  const height = Math.floor(width * 0.5625); // 16:9
  const image = (
    <Image
      src={imageBuilder(imageObject).width(width).height(height).url()}
      alt={imageObject.alt ?? `Cover for ${title}`}
      width={width}
      height={height}
      layout="responsive"
      priority={priority}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
