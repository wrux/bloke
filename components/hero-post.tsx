import React from 'react';
import Link from 'next/link';
import Date from './date';
import CoverImage from './cover-image';

type Props = {
  title: string;
  coverImage?: any;
  date: string;
  excerpt?: string;
  slug: string;
};

const HeroPost: React.FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => (
  <section>
    <div className="mb-8 md:mb-16">
      <CoverImage slug={slug} imageObject={coverImage} title={title} />
    </div>
    <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <Date dateString={date} />
        </div>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  </section>
);

export default HeroPost;
