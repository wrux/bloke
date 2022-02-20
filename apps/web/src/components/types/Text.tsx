import { Box, Container, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';

interface TextProps {
  content: TypedObject;
}

const Text: FC<TextProps> = ({ content }) => {
  if (!content) return null;
  return (
    <Container as="section" maxW="full" my={{ sm: 6, md: 8, lg: 12 }}>
      <Grid templateColumns={{ md: '1fr 1fr' }} gap={4}>
        <Box gridColumn={{ md: 2 }} px={{ md: 12, lg: 16 }}>
          <Box maxW="60ch">
            <PortableText value={content} />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Text;
