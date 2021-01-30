import React from 'react';
import Link from 'next/link';
import { Slug } from '@sanity/types';
import { urlResolver } from '../lib/sanity';

export type CountryLinkProps = {
  name: string;
  slug: Slug;
};

export type CountryListProps = {
  countries: CountryLinkProps[];
};

export const CountryLink: React.FC<CountryLinkProps> = ({ name, slug }) => (
  <Link href={urlResolver('country', slug)}>
    <a
      className="inline-block py-1 px-2 last:mr-0 mr-1 rounded font-semibold
    text-gray-600 bg-gray-200 hover:text-success focus:text-success"
    >
      {name}
    </a>
  </Link>
);

const CountryList: React.FC<CountryListProps> = ({ countries }) => (
  <div className="flex gap-2 mb-8">
    <span className="sr-only">Countries:</span>
    {countries.map((props) => (
      <CountryLink key={props.name} {...props} />
    ))}
  </div>
);

export default CountryList;
