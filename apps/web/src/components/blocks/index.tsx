import { default as Focus } from './Focus';
import { default as Paragraph } from './Paragraph';

const blocks: any = {
  focus: Focus,
  normal: Paragraph,
  // blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  // h1: ({ children }) => <h1>{children}</h1>,
  // h2: ({ children }) => <h2>{children}</h2>,
  // h3: ({ children }) => <h3>{children}</h3>,
  // h4: ({ children }) => <h4>{children}</h4>,
  // h5: ({ children }) => <h5>{children}</h5>,
  // h6: ({ children }) => <h6>{children}</h6>,
};

export default blocks;
