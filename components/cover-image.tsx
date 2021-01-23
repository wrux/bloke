import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';

type Props = {
  title: string;
  imageObject: any;
  slug?: string;
};

const CoverImage: React.FC<Props> = ({ title, imageObject, slug = null }) => {
  const image = (
    <img
      width={1240}
      height={540}
      alt={`Cover for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
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
