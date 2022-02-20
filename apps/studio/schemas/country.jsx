import React from 'react';
import { countryCodeEmoji } from 'country-code-emoji';

export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'countryCode',
      title: 'Country Code',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'countryCode',
      countryCode: 'countryCode',
    },
    prepare: ({ title, countryCode }) => ({
      title,
      media: (
        <span style={{ fontSize: '1.5rem' }}>
          {countryCode ? countryCodeEmoji(countryCode) : '🌍'}
        </span>
      ),
    }),
  },
};
