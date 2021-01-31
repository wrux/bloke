import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import countryCodeEmoji from 'country-code-emoji';
import Container from '../../components/container';
import Layout from '../../components/layout';
import {
  getAllCountriesWithSlug,
  getCountryAndPosts,
} from '../../lib/api/country';
import Header from '../../components/header';
import PostTitle from '../../components/post-title';
import Stories from '../../components/stories';

const CountryBody = ({ country, posts }) => {
  const emoji = country.countryCode
    ? countryCodeEmoji(country.countryCode)
    : null;

  return (
    <>
      <Head>
        <title>
          {country.name} {emoji} | Bloke Blog
        </title>
      </Head>
      <PostTitle>
        {country.name} {emoji}
      </PostTitle>
      {posts && posts.length > 0 ? (
        <Stories posts={posts} title={`Posts from ${country.name}`} />
      ) : (
        <h3 className="mb-8 text-2xl md:text-4xl">
          No posts here yet, check back soon!
        </h3>
      )}
    </>
  );
};

export default function Country({ country, posts }): JSX.Element {
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
          <CountryBody country={country} posts={posts} />
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getCountryAndPosts(params.slug, preview);
  return {
    props: {
      preview,
      country: data?.country || null,
      posts: data?.posts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allCountries = await getAllCountriesWithSlug();
  return {
    paths:
      allCountries?.map((country) => ({
        params: {
          slug: country.slug,
        },
      })) || [],
    fallback: true,
  };
}
