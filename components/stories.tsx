import React from 'react';
import PostPreview from './post-preview';

type Props = {
  posts: any[];
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
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          countries={post.countries}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  </section>
);

export default Stories;
