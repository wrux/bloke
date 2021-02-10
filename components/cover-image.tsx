import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { Slug } from '@sanity/types';
import {
  client,
  custom16by9ImageBuilder,
  ImageObject,
  urlResolver,
} from '@lib/sanity';

type Props = {
  title: string;
  imageObject: ImageObject;
  sizes?: string;
  slug?: Slug;
  priority?: boolean;
};

const CoverImage: React.FC<Props> = ({
  title,
  imageObject,
  sizes = null,
  slug = null,
  priority = false,
}) => {
  const imageProps = useNextSanityImage(client, imageObject, {
    imageBuilder: custom16by9ImageBuilder,
  });

  const image = (
    <Image
      {...imageProps}
      sizes={sizes}
      alt={imageObject.alt ?? `Cover for ${title}`}
      layout="responsive"
      priority={priority}
    />
  );

  return (
    <div className="-mx-5 bg-gray-300 sm:mx-0">
      {slug ? (
        <Link href={urlResolver('post', slug)}>
          <a
            aria-label={title}
            className="block shadow-lg hover:shadow-xl focus:shadow-xl transition-shadow duration-200"
          >
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
