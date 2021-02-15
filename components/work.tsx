import React from 'react';
import Container from './container';

const Work: React.FC = () => (
  <section className="pt-12 px-8 sm:pt-16 md:pt-28 bg-secondary text-gray-100 text-center">
    <Container>
      <div className="sm:w-4/5 md:max-w-3xl mx-auto">
        <h2 className="mb-8 text-4xl md:text-7xl font-bold tracking-tight leading-tight">
          I also make websites
        </h2>
        <p className="mb-12 md:mb-16 text-2xl md:text-4xl leading-tight!important font-semibold">
          If you are interested in working with me or need some help then please{' '}
          <a href="mailto:callum@bloke.blog" className="underline">
            contact me
          </a>
          .
        </p>
      </div>
      <img src="/working.svg" alt="Working on the laptop" loading="lazy" />
    </Container>
  </section>
);

export default Work;
