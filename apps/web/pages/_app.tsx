import { ChakraProvider } from '@chakra-ui/react';
import { PortableTextComponentsProvider } from '@portabletext/react';
import block from 'components/blocks';
import types from 'components/types';

const components = {
  block,
  types,
};

const App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <PortableTextComponentsProvider components={components}>
      <Component {...pageProps} />
    </PortableTextComponentsProvider>
  </ChakraProvider>
);

export default App;
