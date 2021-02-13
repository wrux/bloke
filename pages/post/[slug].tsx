import Container from '@components/container';
import Header from '@components/header';
import Layout from '@components/layout';
import PostBody from '@components/post-body';
import PostHeader from '@components/post-header';
import PostTitle from '@components/post-title';
import SectionSeparator from '@components/section-separator';
import Stories from '@components/stories';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api/post';
import { Post } from '@studio/schema';
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
  post: Post;
  morePosts: Post[];
}

export const getStaticProps = async ({
  params,
  preview = false,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> => {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: { slug: post.slug.current },
      })) || [],
    fallback: true,
  };
};

const Page: React.FC<Props> = ({ post, morePosts }): JSX.Element => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Blokg Blog</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.mainImage}
                date={post.publishedAt}
                countries={post.countries}
              />
              <PostBody content={post.body} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && (
              <Stories posts={morePosts} title="More Stories" />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Page;
