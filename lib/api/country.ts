import { postFields } from '@lib/api/post';
import { getClient, getUniquePosts } from '@lib/sanity';
import { Country } from '@studio/schema';

// const countryFields = `
//   _id,
//   name,
//   title,
//   countryCode,
//   'date': publishedAt,
//   'slug': slug,
//   description,
// `;

export const getPreviewCountryBySlug = async (slug: string) => {
  const data = await getClient(
    true
  ).fetch(
    '*[_type == "country" && slug.current == $slug] | order(publishedAt desc)',
    { slug }
  );
  return data[0];
};

export const getAllCountriesWithSlug = async (): Promise<
  Pick<Country, 'slug'>[]
> => getClient().fetch<Pick<Country, 'slug'>[]>('*[_type == "post"]{ slug }');

export const getCountryAndPosts = async (slug: string, preview = false) => {
  const curClient = getClient(preview);
  const [country, posts] = await Promise.all([
    await getClient(preview)
      .fetch<Country[]>(
        '*[_type == "country" && slug.current == $slug] | order(title asc)',
        { slug }
      )
      .then((res) => res?.[0]),
    await getClient(preview)
      .fetch(
        `*[_type=="country" && slug.current == $slug] {
          "posts": *[_type=='post' && references(^._id)] {
            ${postFields}
          }
        }`,
        { slug }
      )
      .then((res) => res?.[0]?.posts),
  ]);
  return { country, posts: posts ? getUniquePosts(posts) : [] };
};

export const getAllCountries = async (
  preview = false
): Promise<Pick<Country, '_id' | 'slug' | 'name'>[]> => {
  const results = await getClient(preview).fetch(
    `*[_type == "country"] | order(title asc) {
      _id,
      slug,
      name,
    }`
  );
  return results;
};
