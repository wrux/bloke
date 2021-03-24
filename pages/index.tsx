import Intro from '@components/intro';
import Layout from '@components/layout';
import Teaser from '@components/teaser';
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

const Page: React.FC<Props> = ({ allPosts }): JSX.Element => (
  <Layout>
    <Head>
      <title>Welcome to Bloke Blog</title>
    </Head>
    <div className="md:grid grid-cols-1/3 gap-16 max-w-screen-2xl px-5 sm:px-12 md:px-16 2xl:px-5 mx-auto">
      <div className="relative">
        <div className="md:sticky md:top-24 md:mb-48">
          <Intro />
        </div>
      </div>
      <div className="grid gap-4 md:gap-8 md:py-16">
        {allPosts.map((post, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <Teaser key={post._id} priority={index === 0} {...post} />
        ))}
      </div>
    </div>
  </Layout>
);

export default Page;
