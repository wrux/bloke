import { Container, Heading } from '@chakra-ui/react';

const PageHeader = ({ as = 'h1', center = false, children }) => (
  <Container my={{ base: 4, md: 8, lg: 12, xl: 16 }}>
    <Heading
      as={as}
      mb={{ base: 16, sm: 20, md: 24 }}
      fontSize={{ base: '4xl', md: '6xl' }}
      textAlign={center ? 'center' : 'left'}
    >
      {children}
    </Heading>
  </Container>
);

export default PageHeader;
