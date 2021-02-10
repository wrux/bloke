import React from 'react';
import Container from './container';
import Work from './work';

const Footer: React.FC = () => (
  <footer className="bg-accent-1 border-t border-accent-2">
    <Work />
    <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Like this website?
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://github.com/wrux/bloke"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            View the source code
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
