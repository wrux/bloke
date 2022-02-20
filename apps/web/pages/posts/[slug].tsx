import { BaseLayout } from 'layouts';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Intro } from 'components';
import { PortableText } from '@portabletext/react';
import { getClient } from 'lib/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from 'lib/sanity';
import { useRouter } from 'next/router';

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    excerpt,
    "slug": slug.current,
    "countries": countries[] -> {
      _id,
      countryCode,
      name,
      "slug": slug.current,
    },
  }
`;

export default function PostPage({ data, preview }) {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, excerpt, mainImage, body, countries } = post;

  return (
    <>
      <Head>
        <title>{title} | Bloke Blog | bloke.blog</title>
      </Head>
      <BaseLayout>
        <article>
          <Intro
            countries={countries}
            excerpt={excerpt}
            heading={title}
            image={mainImage}
          />
          <PortableText value={body} />
        </article>
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { post },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
