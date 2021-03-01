import Container from '@components/container';
import Header from '@components/header';
import Layout from '@components/layout';
import PostTitle from '@components/post-title';
import Stories from '@components/stories';
import { getAllCountriesWithSlug, getCountryAndPosts } from '@lib/api/country';
import { Country, Post } from '@studio/schema';
import countryCodeEmoji from 'country-code-emoji';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type Params = {
  slug: string;
};

interface Props {
  preview: boolean;
  country: Country;
  posts: Post[];
}

export const getStaticProps = async ({
  params,
  preview = false,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> => {
  const data = await getCountryAndPosts(params.slug, preview);
  return {
    props: {
      preview,
      country: data || null,
      posts: data?.posts || null,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const allCountries = await getAllCountriesWithSlug();
  return {
    paths:
      allCountries?.map((country) => ({
        params: { slug: country.slug.current },
      })) || [],
    fallback: true,
  };
};

const Page: React.FC<Props> = ({ country, posts }): JSX.Element => {
  const router = useRouter();
  if (!router.isFallback && !country?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article id="content">
            <Head>
              <title>
                {country.name} {countryCodeEmoji(country.countryCode)} | Bloke
                Blog
              </title>
            </Head>
            <PostTitle>
              {country.name}{' '}
              <span role="presentation">
                {countryCodeEmoji(country.countryCode)}
              </span>
            </PostTitle>
            {posts && posts.length > 0 ? (
              <Stories posts={posts} title={`Posts from ${country.name}`} />
            ) : (
              <h3 className="mb-8 text-2xl md:text-4xl">
                No posts here yet, check back soon!
              </h3>
            )}
          </article>
        )}
      </Container>
    </Layout>
  );
};

export default Page;
