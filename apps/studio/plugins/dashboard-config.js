export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Countries',
        order: '_updatedAt desc',
        types: ['country'],
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Latest posts',
        order: '_updatedAt desc',
        types: ['post'],
      },
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Documents with unpublished changes',
        query: '*[_id in path("drafts.**")] | order(_updatedAt desc)',
      },
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
      },
    },
    // {
    //   name: 'vercel',
    //   options: {
    //     deployLimit: 10,
    //     projectId: process.env.SANITY_STUDIO_VERCEL_PROJECT_ID,
    //     token: process.env.SANITY_STUDIO_VERCEL_TOKEN,
    //   },
    //   layout: {
    //     width: 'large',
    //   },
    // },
  ],
};
