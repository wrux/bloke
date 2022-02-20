import { FC } from 'react';
import { Text } from '@chakra-ui/react';

const Focus: FC = ({ children }) => (
  <Text
    as="p"
    my={{ base: 4, md: 6, lg: 8 }}
    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
  >
    {children}
  </Text>
);

export default Focus;
