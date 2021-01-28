import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { imageBuilder } from '../lib/sanity';

type Props = {
  title: string;
  imageObject: any;
  slug?: string;
  priority?: boolean;
};

const CoverImage: React.FC<Props> = ({
  title,
  imageObject,
  slug = null,
  priority = false,
}) => {
  const image = (
    <Image
      src={imageBuilder(imageObject).width(1240).height(540).url()}
      alt={imageObject.alt ?? `Cover for ${title}`}
      width={1240}
      height={540}
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
