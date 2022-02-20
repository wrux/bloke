export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'countries',
      title: 'Countries',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'country' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Focus', value: 'focus' },
            { title: 'Normal', value: 'normal' },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blocks',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'mainImage',
    },
  },
};
