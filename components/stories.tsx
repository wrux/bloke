import { Post } from '@studio/schema';
import React from 'react';
import PostPreview from './post-preview';

type Props = {
  posts: Post[];
  title?: string;
};

const Stories: React.FC<Props> = ({ posts, title }) => (
  <section>
    {title && (
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-24 mb-32">
      {posts.map((post) => (
        <PostPreview
          // eslint-disable-next-line no-underscore-dangle
          key={post._id}
          title={post.title}
          coverImage={post.mainImage}
          countries={post.countries}
          date={post.publishedAt}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  </section>
);

export default Stories;
