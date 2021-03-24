import Link from 'next/link';
import React from 'react';
import Logo from './logo';

const Header: React.FC = () => (
  <h2 className="flex items-baseline font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Logo className="self-center text-2xl md:text-4xl mr-3" />
    <span className="text-2xl md:text-4xl">
      <Link href="/">
        <a className="link">Bloke</a>
      </Link>
      .
    </span>
    <Link href="/countries">
      <a className="text-xl md:text-2xl ml-4 link">Countries</a>
    </Link>
  </h2>
);

export default Header;
