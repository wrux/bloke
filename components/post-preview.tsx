import { ImageObject, urlResolver } from '@lib/sanity';
import { Slug } from '@sanity/types';
import { Country, SanityKeyedReference } from '@studio/schema';
import Link from 'next/link';
import React from 'react';
import CountryList from './country-list';
import CoverImage from './cover-image';
import Date from './date';

type Props = {
  title: string;
  coverImage?: ImageObject;
  countries?: Array<SanityKeyedReference<Country>>;
  date: string;
  excerpt?: string;
  slug: Slug;
};

const PostPreview: React.FC<Props> = ({
  title,
  coverImage,
  countries,
  date,
  excerpt,
  slug,
}) => (
  <article>
    <div className="mb-5">
      <CoverImage
        slug={slug}
        title={title}
        imageObject={coverImage}
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 600px, (max-width: 1023px) 332px, (max-width: 1279px) 420px, 556px"
      />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link href={urlResolver('post', slug)}>
        <a className="link">{title}</a>
      </Link>
    </h3>
    <div className="text-lg mb-4">
      <Date dateString={date} />
    </div>
    {countries && <CountryList countries={countries} />}
    {excerpt && <p className="text-lg leading-relaxed mb-4">{excerpt}</p>}
  </article>
);

export default PostPreview;
