import { getClient, getUniquePosts } from '@lib/sanity';

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'countries': countries[]->{countryCode, name, slug},
  'slug': slug,
  'coverImage': mainImage,
`;

export const getPreviewPostBySlug = async (slug: string) => {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc) {
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
};

export const getAllPostsWithSlug = async () => {
  const data = await getClient().fetch(
    '*[_type == "post"]{ \'slug\': slug.current }'
  );
  return data;
};

export const getAllPostsForHome = async (preview: boolean) => {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`);
  return getUniquePosts(results);
};

export const getPostAndMorePosts = async (slug: string, preview: boolean) => {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) {
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: morePosts ? getUniquePosts(morePosts) : [] };
};

export const getAllCountries = async (preview: boolean) => {
  const results = await getClient(preview)
    .fetch(`*[_type == "country"] | order(title asc) {
      _id,
      name,
      title,
      'date': publishedAt,
      'slug': slug,
      description,
    }`);
  return results ? getUniquePosts(results) : [];
};
