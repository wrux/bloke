import React from 'react';
import Container from './container';
import Work from './work';

const Footer: React.FC = () => (
  <footer className="bg-accent-1 border-t border-accent-2">
    <Work />
    <Container>
      <div className="py-28 flex flex-col md:flex-row items-center md:justify-around gap-8">
        <p
          className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-center md:text-left mb-10 md:mb-0 md:pr-4"
          role="heading"
          aria-level={4}
        >
          Like this website?
        </p>
        <a
          href="https://github.com/wrux/bloke"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 md:px-8 duration-200 transition-colors mb-6 md:mb-0 text-center"
        >
          View the source code
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
