import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { BaseLayout } from 'layouts';
import Earth from 'assets/icons/earth.svg';
import Head from 'next/head';
import NextLink from 'next/link';
import { getClient } from 'lib/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from 'lib/sanity';

const countriesQuery = groq`
  *[_type == "country"] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
  }
`;

export default function CountriesPage({ data, preview }) {
  const { data: countries } = usePreviewSubscription(countriesQuery, {
    initialData: data.countries,
    enabled: preview,
  });

  return (
    <>
      <Head>
        <title>Countries | Bloke Blog | bloke.blog</title>
      </Head>
      <BaseLayout>
        <Container as="section" maxW="full" my={{ base: 6, md: 8, lg: 12 }}>
          <Grid templateColumns={{ md: '1fr 1fr' }} gap={16}>
            <div>
              <Box
                aria-hidden
                position="absolute"
                top={0}
                left={0}
                width={{ base: '70vw', md: '50vw' }}
                height={{ base: '70vw', md: '50vw' }}
                transform="translate(-25%, -25%)"
                zIndex={-1}
                color={useColorModeValue('gray.100', 'gray.700')}
              >
                <Earth />
              </Box>
              <Heading
                as="h1"
                mb={{ base: 4, sm: 8, md: 12 }}
                fontSize={{ base: '4xl', md: '6xl' }}
              >
                Countries
              </Heading>
              <Heading as="h2" mb={16} fontSize={{ base: 'xl', md: '2xl' }}>
                All countries, states and regions mentioned in the blog
              </Heading>
            </div>
            <Stack spacing={4}>
              {countries?.map((country) => (
                <NextLink
                  href={`/countries/${country.slug}`}
                  key={country._id}
                  passHref
                >
                  <a>
                    <Heading as="h2">{country.name}</Heading>
                  </a>
                </NextLink>
              ))}
            </Stack>
          </Grid>
        </Container>
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const countries = await getClient(preview).fetch(countriesQuery);

  return {
    props: {
      preview,
      data: { countries },
    },
  };
}
