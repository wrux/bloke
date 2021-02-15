import Container from '@components/container';
import Header from '@components/header';
import Layout from '@components/layout';
import PostTitle from '@components/post-title';
import { getAllCountries } from '@lib/api/country';
import { urlResolver } from '@lib/sanity';
import { Country } from '@studio/schema';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import React from 'react';

interface Props {
  preview: boolean;
  allCountries: Pick<Country, '_id' | 'slug' | 'name'>[];
}

export const getStaticProps = async ({
  preview = false,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const allCountries = await getAllCountries(preview);
  return {
    props: {
      preview,
      allCountries,
    },
    revalidate: 1,
  };
};

const Page: React.FC<Props> = ({ allCountries }) => (
  <Layout>
    <Container>
      <Header />
      <div className="md:flex gap-10 lg:gap-24 mb-10 md:mb-16 items-baseline">
        <div>
          <PostTitle className="md:w-1/2 lg:w-5/12">Countries</PostTitle>
        </div>
        <div>
          {allCountries.map((country) => (
            // eslint-disable-next-line no-underscore-dangle
            <h3 key={country._id} className="mb-5">
              <Link href={urlResolver('country', country.slug)}>
                <a className="text-3xl mb-3 link leading-snug" rel="bookmark">
                  {country.name}
                </a>
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </Container>
  </Layout>
);

export default Page;
