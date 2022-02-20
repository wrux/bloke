import { Button, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import countryCodeEmoji from 'country-code-emoji';

export type CountryProps = {
  id: string;
  name: string;
  slug: string;
  countryCode: string;
  large?: boolean;
};

export type CountryListProps = {
  countries: Array<CountryProps>;
};

export const CountryLink: FC<CountryProps> = ({ name, slug, countryCode }) => (
  <NextLink href={`/countries/${slug}`} passHref>
    <Button variant="outline" as="a">
      {countryCode && (
        <Text as="span" mr={2} fontSize="1.5em" aria-hidden>
          {countryCodeEmoji(countryCode)}
        </Text>
      )}
      {name}
    </Button>
  </NextLink>
);

const CountryList: FC<CountryListProps> = ({ countries }) => (
  <div>
    <VisuallyHidden>Countries:</VisuallyHidden>
    <Stack direction="row" spacing={4} align="center">
      {countries.map((props) => (
        // eslint-disable-next-line no-underscore-dangle
        <CountryLink key={props.id} {...props} />
      ))}
    </Stack>
  </div>
);

export default CountryList;
