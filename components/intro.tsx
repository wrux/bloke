import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Intro: React.FC = () => (
  <section className="flex-col md:flex-row flex md:items-baseline md:justify-between mt-16 mb-16 md:mb-12">
    <motion.h1
      className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
      layoutId="title"
    >
      Bloke.
    </motion.h1>
    <motion.h4
      className="md:text-left text-lg mt-5 md:pl-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      My travel blog from many{' '}
      <Link href="/countries">
        <a className="link">Countries</a>
      </Link>{' '}
      all around the world.
    </motion.h4>
  </section>
);

export default Intro;
