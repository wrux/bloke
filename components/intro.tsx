import Logo from '@components/logo';
import Link from 'next/link';
import React from 'react';

const Intro: React.FC = () => (
  <section className="md:items-baseline md:justify-between mt-16 mb-16 md:mb-12">
    <Logo className="text-6xl lg:text-8xl mb-4 md:mb-8" />
    <h1 className="mb-4 md:mb-8 text-6xl md:text-8xl font-bold tracking-tight leading-tight md:pr-8">
      Bloke.
    </h1>
    <h4 className="md:text-left text-lg md:text-2xl">
      My travel blog from many{' '}
      <Link href="/countries">
        <a className="link">Countries</a>
      </Link>{' '}
      all around the world.
    </h4>
  </section>
);

export default Intro;
