import {
  Box,
  Container,
  Grid,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { BaseLayout } from 'layouts';
import { BlogPosts } from 'components';
import Head from 'next/head';
import Logo from 'assets/icons/logo.svg';
import { getClient } from 'lib/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from 'lib/sanity';

const homepageQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
  }
`;

export default function IndexPage({ data, preview }) {
  const { data: posts } = usePreviewSubscription(homepageQuery, {
    initialData: data.posts,
    enabled: preview && data.posts,
  });

  return (
    <>
      <Head>
        <title>Bloke Blog | bloke.blog</title>
      </Head>
      <BaseLayout>
        <Container as="section" maxW="full" my={{ base: 6, md: 8, lg: 12 }}>
          <Grid gap={16} gridTemplateColumns={{ md: '1fr 1fr' }}>
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
                <Logo />
              </Box>
              <Box maxW="30ch">
                <Heading
                  as="h1"
                  mb={{ base: 4, sm: 8, md: 12 }}
                  fontSize={{ base: '3xl', md: '6xl', lg: '8xl' }}
                  fontWeight="bolder"
                >
                  Bloke.
                </Heading>
                <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }}>
                  My travel blog from many Countries all around the world.
                </Heading>
              </Box>
            </div>
            <BlogPosts posts={posts} />
          </Grid>
        </Container>
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(homepageQuery);

  return {
    props: {
      preview,
      data: { posts },
    },
  };
}
