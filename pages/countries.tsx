import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import { getAllCountries } from '../lib/api';
import PostTitle from '../components/post-title';

type Props = {
  allCountries: any[];
};

const Countries: React.FC<Props> = ({ allCountries }) => (
  <Layout>
    <Container>
      <Header />
      <div className="md:flex gap-10 mb-10 md:mb-16 items-baseline">
        <PostTitle className="md:w-1/2 lg:w-5/12">Countries</PostTitle>
        <div>
          {allCountries.map((country) => (
            // eslint-disable-next-line no-underscore-dangle
            <h3 key={country._id} className="mb-5">
              <Link href={`/country/${country.slug}`}>
                <a className="text-3xl mb-3 leading-snug" rel="bookmark">
                  {country.title}
                </a>
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </Container>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allCountries = await getAllCountries(preview);
  return {
    props: {
      preview,
      allCountries,
    },
    revalidate: 1,
  };
};

export default Countries;
