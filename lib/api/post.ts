import { getClient, getUniquePosts } from '@lib/sanity';
import { Post } from '@studio/schema';

export const postFields = `
  _id,
  name,
  title,
  publishedAt,
  excerpt,
  'countries': countries[]->{'_key': _id, countryCode, name, slug},
  slug,
  mainImage,
`;

export const getPreviewPostBySlug = async (slug: string) => {
  const data = await getClient(
    true
  ).fetch(
    '*[_type == "post" && slug.current == $slug] | order(publishedAt desc)',
    { slug }
  );
  return data[0];
};

export const getAllPostsWithSlug = async (): Promise<Pick<Post, 'slug'>[]> =>
  getClient().fetch<Pick<Post, 'slug'>[]>('*[_type == "post"]{ slug }');

export const getAllPostsForHome = async (preview = false): Promise<Post[]> => {
  const results = await getClient(preview).fetch<
    Post[]
  >(`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`);
  return getUniquePosts(results);
};

export const getPostAndMorePosts = async (
  slug: string,
  preview: boolean
): Promise<{ post: Post; morePosts: Post[] }> => {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch<Post[]>(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch<Post[]>(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) {
        ${postFields}
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: morePosts ? getUniquePosts(morePosts) : [] };
};
