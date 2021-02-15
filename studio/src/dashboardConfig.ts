export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Latest posts',
        order: '_updatedAt desc',
        types: ['post'],
      },
    },
    {
      name: 'vercel',
      options: {
        deployLimit: 10,
        projectId: process.env.SANITY_STUDIO_VERCEL_PROJECT_ID,
        token: process.env.SANITY_STUDIO_VERCEL_TOKEN,
      },
      layout: {
        width: 'large',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Countries',
        order: '_updatedAt desc',
        types: ['country'],
      },
    },
  ],
};
