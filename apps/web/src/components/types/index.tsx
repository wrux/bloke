import { default as Feature } from './Feature';
import { default as Image } from './Image';
import { default as ImageGallery } from './ImageGallery';
import { default as Text } from './Text';

const types = {
  feature: ({ value }) => <Feature {...value} />,
  imageGallery: ({ value }) => <ImageGallery {...value} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  image: ({ value }) => <Image {...value} />,
  blocks: ({ value }) => <Text {...value} />,
};

export default types;
