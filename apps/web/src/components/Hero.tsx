import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Hero = ({ ctas, heading, subheading }) => (
  <Container maxW={'3xl'}>
    <Flex
      direction="column"
      textAlign="center"
      gap={{ base: 2, md: 4 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        as="h1"
        fontWeight={900}
        fontSize={{ base: '4xl', sm: '6xl', md: '8xl' }}
      >
        {heading}
      </Heading>
      <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}>{subheading}</Text>
      <Stack
        direction={'row'}
        mt={{ base: 4, md: 8 }}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        {ctas}
      </Stack>
    </Flex>
  </Container>
);

export default Hero;
