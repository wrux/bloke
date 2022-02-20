import { BlogPosts, PageHeader } from 'components';
import { BaseLayout } from 'layouts';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Text } from '@chakra-ui/react';
import { countryCodeEmoji } from 'country-code-emoji';
import { getClient } from 'lib/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from 'lib/sanity';
import { useRouter } from 'next/router';

const countryQuery = groq`
  *[_type == "country" && slug.current == $slug][0] {
    _id,
    name,
    countryCode,
    publishedAt,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)] {
      mainImage,
      "slug": slug.current,
      title
    }
  }
`;

export default function CountriesPage({ data, preview }) {
  const router = useRouter();

  const { data: country } = usePreviewSubscription(countryQuery, {
    params: { slug: data.country?.slug },
    initialData: data.country,
    enabled: preview && data.country?.slug,
  });

  if (!router.isFallback && !data.country?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { countryCode, name, posts } = country;

  return (
    <>
      <Head>
        <title>
          {name}
          {countryCode && ` ${countryCodeEmoji(countryCode)}`} | Bloke Blog |
          bloke.blog
        </title>
      </Head>
      <BaseLayout>
        <PageHeader center>
          {name}{' '}
          {countryCode && (
            <Text as="span" mr={4} aria-hidden>
              {countryCodeEmoji(countryCode)}
            </Text>
          )}
        </PageHeader>
        {posts.length > 0 ? (
          <BlogPosts posts={posts} />
        ) : (
          <Text
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            textAlign="center"
          >
            No posts here yet, check back soon!
          </Text>
        )}
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const country = await getClient(preview).fetch(countryQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { country },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "country" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
