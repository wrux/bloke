import React from 'react';
import Link from 'next/link';
import Logo from './logo';

const Header: React.FC = () => (
  <h2 className="flex items-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Logo className="mr-3" />
    <Link href="/">
      <a className="hover:underline">Bloke</a>
    </Link>
    .
  </h2>
);

export default Header;
