export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
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
  preview: {
    select: {
      images: 'images',
    },
    prepare: ({ images }) => ({
      title: 'Image Gallery',
      subtitle: images ? `${images.length} images added.` : 'No images.',
      media: images?.[0],
    }),
  },
};
