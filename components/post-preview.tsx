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

const PostPreview: React.FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => (
  <div>
    <div className="mb-5">
      <CoverImage
        slug={slug}
        title={title}
        imageObject={coverImage}
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 600px, (max-width: 1023px) 332px, (max-width: 1279px) 420px, 556px"
      />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline">{title}</a>
      </Link>
    </h3>
    <div className="text-lg mb-4">
      <Date dateString={date} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </div>
);

export default PostPreview;
