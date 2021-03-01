import React from 'react';
import Link from 'next/link';

const Intro: React.FC = () => (
  <section className="flex-col md:flex-row flex md:items-baseline md:justify-between mt-16 mb-16 md:mb-12">
    <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight md:pr-8">
      Bloke.
    </h1>
    <h4 className="md:text-left text-lg mt-5 md:pl-8">
      My travel blog from many{' '}
      <Link href="/countries">
        <a className="link">Countries</a>
      </Link>{' '}
      all around the world.
    </h4>
  </section>
);

export default Intro;
