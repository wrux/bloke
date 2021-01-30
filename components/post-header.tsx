import React from 'react';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage?: any;
  date: string;
};

const PostHeader: React.FC<Props> = ({ title, coverImage, date }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="mb-8 md:mb-16">
      <CoverImage
        title={title}
        imageObject={coverImage}
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 600px, (max-width: 1023px) 728px, (max-width: 1279px) 984px, 1240px"
        priority
      />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-lg">
        <Date dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
