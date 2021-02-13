import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => (
  <h2 className="flex items-baseline font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <motion.span className="text-2xl md:text-4xl" layoutId="title">
      <Link href="/">
        <a className="link">Bloke</a>
      </Link>
      .
    </motion.span>
    <Link href="/countries">
      <a className="text-xl md:text-2xl ml-4 link">Countries</a>
    </Link>
  </h2>
);

export default Header;
