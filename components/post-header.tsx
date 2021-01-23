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
    <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
      <CoverImage title={title} imageObject={coverImage} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-lg">
        <Date dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
