// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import country from './country';
import post from './post';
import imageGrid from './blocks/imageGrid';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, country, blockContent, imageGrid]),
});
