import { postFields } from '@lib/api/post';
import { getClient } from '@lib/sanity';
import { Country, Post } from '@studio/schema';

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

/*
 * TODO: replace this with an inline type in replacement of
 *       `.fetch<CountryWithPosts[]>(` as I couldn't find a simple solution.
 */
interface CountryWithPosts extends Country {
  posts?: Post[];
}

export const getCountryAndPosts = async (
  slug: string,
  preview = false
): Promise<CountryWithPosts> =>
  getClient(preview)
    .fetch<CountryWithPosts[]>(
      `*[_type == 'country' && slug.current == $slug] | order(title asc) {
      _id,
      name,
      countryCode,
      publishedAt,
      slug,
      'posts': *[_type=='post' && references(^._id)] { ${postFields} }
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

export const getAllCountries = async (
  preview = false
): Promise<Pick<Country, '_id' | 'slug' | 'name'>[]> =>
  getClient(preview).fetch(
    `*[_type == "country"] | order(title asc) {
      _id,
      slug,
      name,
    }`
  );
