import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const defaultClasses =
  'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 md:text-left';

const PostTitle: React.FC<Props> = ({ children, className }) => (
  <h1 className={classnames(className, defaultClasses)}>{children}</h1>
);

export default PostTitle;
