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
};
