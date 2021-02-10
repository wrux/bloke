import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    }
    slugs.add(post.slug);
    return true;
  });
};

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

const countryFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  'slug': slug,
  description,
`;

// List posts in the country:
//
// *[_type=="country"]{
// 	title,
//   "relatedPosts": *[_type=='post' && references(^._id)]{ title }
// }

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug },
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(
    '*[_type == "post"]{ \'slug\': slug.current }',
  );
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
      }`,
        { slug },
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug },
    ),
  ]);
  return { post, morePosts: morePosts ? getUniquePosts(morePosts) : [] };
}

export async function getAllCountries(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "country"] | order(title asc){
      ${countryFields}
    }`);
  return results ? getUniquePosts(results) : [];
}
