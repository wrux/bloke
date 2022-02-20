import { Box, Grid, Heading } from '@chakra-ui/react';
import CountryList, { CountryProps } from 'components/CountryList';
import { FC } from 'react';
import { Image } from 'components';
import { PortableText } from '@portabletext/react';
import { SanityImageAssetDocument } from '@sanity/client';
import { TypedObject } from '@portabletext/types';
import { custom16by9ImageBuilder } from 'lib/sanity';

type IntroProps = {
  countries?: Array<CountryProps>;
  excerpt?: TypedObject;
  heading: string;
  image: SanityImageAssetDocument;
};

const Intro: FC<IntroProps> = ({ countries, excerpt, heading, image }) => (
  <Box as="section" mx="auto" maxW="full" my={{ base: 6, md: 8, lg: 12 }}>
    <Grid templateColumns={{ md: '1fr 1fr' }} gap={4}>
      <Box px={{ base: 4, md: 12, lg: 16 }} order={{ base: 1, md: 2 }}>
        <Box maxW="60ch">
          <Heading
            as="h1"
            mb={{ base: 2, sm: 4, md: 8 }}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          >
            {heading}
          </Heading>
          <CountryList countries={countries} />
          {excerpt && <PortableText value={excerpt} />}
        </Box>
      </Box>
      <Box order={{ base: 2, md: 1 }}>
        <Image alt="" asset={image} imageBuilder={custom16by9ImageBuilder} />
      </Box>
    </Grid>
  </Box>
);

export default Intro;
