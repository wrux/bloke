import React from 'react';

type Props = {
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={`container mx-auto px-5 ${className}`}>{children}</div>
);

export default Container;
