import React from 'react';
import Link from 'next/link';
import { Slug } from '@sanity/types';
import countryCodeEmoji from 'country-code-emoji';
import { urlResolver } from '../lib/sanity';

export type CountryLinkProps = {
  name: string;
  slug: Slug;
  countryCode?: string;
};

export type CountryListProps = {
  countries: CountryLinkProps[];
};

export const CountryLink: React.FC<CountryLinkProps> = ({
  name,
  slug,
  countryCode,
}) => (
  <Link href={urlResolver('country', slug)}>
    {countryCode ? (
      <a className="inline-block py-1 last:mr-0 mr-1 text-4xl">
        {countryCodeEmoji(countryCode)}
        <span className="sr-only">{name}</span>
      </a>
    ) : (
      <a className="inline-block py-1 last:mr-0 mr-1 link">{name}</a>
    )}
  </Link>
);

const CountryList: React.FC<CountryListProps> = ({ countries }) => (
  <div className="flex items-center gap-2 mb-8">
    <span className="sr-only">Countries:</span>
    {countries.map((props) => (
      <CountryLink key={props.name} {...props} />
    ))}
  </div>
);

export default CountryList;
