import React from 'react';
import Component from '../../../components/blocks/imageGrid';

export default {
  name: 'imageGrid',
  type: 'object',
  title: 'Image Grid',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Important for accessibility and SEO',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection) {
      return { media: selection.images };
    },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    // eslint-disable-next-line react/display-name
    component: ({ value }): React.JSX => {
      const { media } = value;

      if (!media) {
        return (
          <p style={{ padding: '1.125rem', margin: 0 }}>
            Add images to see a preview
          </p>
        );
      }

      return <Component node={{ images: media }} />;
    },
  },
};
