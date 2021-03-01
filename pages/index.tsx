import Container from '@components/container';
import HeroPost from '@components/hero-post';
import Intro from '@components/intro';
import Layout from '@components/layout';
import Stories from '@components/stories';
import { getAllPostsForHome } from '@lib/api/post';
import { Post } from '@studio/schema';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import React from 'react';

type Props = {
  allPosts: Post[];
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
}): Promise<GetStaticPropsResult<Props>> => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts },
    revalidate: 1,
  };
};

const Page: React.FC<Props> = ({ allPosts }): JSX.Element => {
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
          <div id="content">
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.mainImage}
                date={heroPost.publishedAt}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && (
              <Stories posts={morePosts} title="More Stories" />
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
