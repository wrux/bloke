import { FC } from 'react';
import { Text } from '@chakra-ui/react';

const Paragraph: FC = ({ children }) => (
  <Text as="p" my={{ base: 4, md: 6, lg: 8 }}>
    {children}
  </Text>
);

export default Paragraph;
