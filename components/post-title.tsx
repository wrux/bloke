import React from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const defaultClasses =
  'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 md:text-left';

const PostTitle: React.FC<Props> = ({ children, className }) => (
  <motion.h1
    className={classnames(className, defaultClasses)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.h1>
);

export default PostTitle;
