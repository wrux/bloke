import { default as Feature } from './feature';
import { default as ImageGallery } from './image-gallery';
import { default as Image } from './image';
import { default as Text } from './text';

export default {
  title: 'Block Content',
  name: 'blocks',
  type: 'array',
  of: [Feature, ImageGallery, Image, Text],
};
