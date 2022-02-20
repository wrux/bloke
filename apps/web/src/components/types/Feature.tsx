import { Box, Grid, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Image } from 'components';
import { PortableText } from '@portabletext/react';
import { SanityImageAssetDocument } from '@sanity/client';
import { TypedObject } from '@portabletext/types';

type FeatureProps = {
  content: TypedObject;
  image: SanityImageAssetDocument;
  heading: string;
};

const Feature: FC<FeatureProps> = ({ content, heading, image }) => (
  <Box as="section" mx="auto" maxW="full" my={{ base: 6, md: 8, lg: 12 }}>
    <Grid templateColumns={{ md: '1fr 1fr' }} gap={4}>
      <Image alt="" asset={image} sizes="(max-width: 800px) 100vw, 800px" />
      <Box px={{ base: 4, md: 12, lg: 16 }}>
        <Box maxW="60ch">
          <Heading as="h2" size="xl" mb={{ base: 4, md: 6, lg: 8 }}>
            {heading}
          </Heading>
          <PortableText value={content} />
        </Box>
      </Box>
    </Grid>
  </Box>
);

export default Feature;
