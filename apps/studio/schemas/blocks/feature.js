export default {
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'content',
    },
  },
};
