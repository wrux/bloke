import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '../components/container';
import Stories from '../components/stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';

type Props = {
  allPosts: any[];
};

const Index: React.FC<Props> = ({ allPosts }): JSX.Element => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Welcome to Bloke Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && (
            <Stories posts={morePosts} title="More Stories" />
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts },
    revalidate: 1,
  };
};

export default Index;
