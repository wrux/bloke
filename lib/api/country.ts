import { getClient, getUniquePosts } from '@lib/sanity';

const countryFields = `
  _id,
  name,
  title,
  countryCode,
  'date': publishedAt,
  'slug': slug,
  description,
`;

export const getPreviewCountryBySlug = async (slug: string) => {
  const data = await getClient(true).fetch(
    `*[_type == "country" && slug.current == $slug] | order(publishedAt desc) {
      ${countryFields}
      body
    }`,
    { slug }
  );
  return data[0];
};

export const getAllCountriesWithSlug = async () => {
  const data = await getClient().fetch(
    '*[_type == "post"]{ \'slug\': slug.current }'
  );
  return data;
};

export const getCountryAndPosts = async (slug: string, preview: boolean) => {
  const curClient = getClient(preview);
  const [country, posts] = await Promise.all([
    await getClient(preview)
      .fetch(
        `*[_type == "country" && slug.current == $slug] | order(title asc) {
        ${countryFields}
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    await getClient(preview)
      .fetch(
        `*[_type=="country" && slug.current == $slug] {
          "posts": *[_type=='post' && references(^._id)] {
            _id,
            name,
            title,
            'date': publishedAt,
            excerpt,
            'countries': countries[]->{countryCode, name, slug},
            'slug': slug,
            'coverImage': mainImage,
          }
        }`,
        { slug }
      )
      .then((res) => res?.[0]?.posts),
  ]);
  return { country, posts: posts ? getUniquePosts(posts) : [] };
};

export const getAllCountries = async (preview: boolean) => {
  const results = await getClient(preview)
    .fetch(`*[_type == "country"] | order(title asc) {
      ${countryFields}
    }`);
  return results ? getUniquePosts(results) : [];
};
