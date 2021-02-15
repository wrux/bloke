import { urlResolver } from '@lib/sanity';
import { Country, SanityKeyedReference } from '@studio/schema';
import countryCodeEmoji from 'country-code-emoji';
import Link from 'next/link';
import React from 'react';

export type CountryLinkProps = Pick<Country, 'name' | 'slug' | 'countryCode'>;

export type CountryListProps = {
  countries: Array<SanityKeyedReference<Country>>;
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
      // eslint-disable-next-line no-underscore-dangle
      <CountryLink key={props._key} {...props} />
    ))}
  </div>
);

export default CountryList;
