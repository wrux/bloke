import { urlResolver } from '@lib/sanity';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import { Post } from '@studio/schema';
import Link from 'next/link';
import React, { useRef } from 'react';
import CountryList from './country-list';
import CoverImage from './cover-image';
import Date from './date';

type Props = Pick<
  Post,
  'title' | 'mainImage' | 'countries' | 'publishedAt' | 'slug' | 'excerpt'
> & {
  priority: boolean;
};

const Teaser: React.FC<Props> = ({
  title,
  mainImage,
  countries,
  publishedAt,
  excerpt,
  slug,
  priority = false,
}) => {
  const rootNode = useRef(null);
  const { isVisible } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
    partialVisibility: 'top',
  });
  return (
    <article
      ref={rootNode}
      className={`grid lg:grid-cols-2 gap-4 lg:gap-8 transition-opacity ease-in-out duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-10 hover:opacity-100'
      }`}
    >
      <div>
        <CoverImage
          slug={slug}
          title={title}
          imageObject={mainImage}
          priority={first}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 600px, (max-width: 1023px) 332px, (max-width: 1279px) 420px, 556px"
        />
      </div>
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={urlResolver('post', slug)}>
            <a className="link">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={publishedAt} />
        </div>
        {countries && <CountryList countries={countries} />}
        {excerpt && (
          <p className="hidden md:block mb-4 text-lg leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </article>
  );
};

export default Teaser;
