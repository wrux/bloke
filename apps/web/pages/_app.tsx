import { ChakraProvider } from '@chakra-ui/react';
import { PortableTextComponentsProvider } from '@portabletext/react';
import block from 'components/blocks';
import types from 'components/types';

const App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <PortableTextComponentsProvider
      components={{
        block,
        types: {
          ...types,
          // image: ({ value }) => <h1>image</h1>,
        },
      }}
    >
      <Component {...pageProps} />
    </PortableTextComponentsProvider>
  </ChakraProvider>
);

export default App;
