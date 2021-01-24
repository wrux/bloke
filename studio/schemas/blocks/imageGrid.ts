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
        },
      ],
    },
  ],
};
