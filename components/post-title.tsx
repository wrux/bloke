import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const PostTitle: React.FC<Props> = ({ children, className }) => (
  <h1
    className={classnames(
      className,
      'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-12 md:text-left'
    )}
  >
    {children}
  </h1>
);

export default PostTitle;
