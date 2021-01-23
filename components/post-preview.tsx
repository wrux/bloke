import React from 'react';
import Link from 'next/link';
import Date from './date';
import CoverImage from './cover-image';

const PostPreview = ({ title, coverImage, date, excerpt, slug }) => (
  <div>
    <div className="mb-5">
      <CoverImage slug={slug} title={title} imageObject={coverImage} />
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
