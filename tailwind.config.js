module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      typography: {
        xl: {
          css: {
            'figure figcaption': { marginTop: `${8 / 12}em` },
          },
        },
      },
      colors: {
        brand: '#ef233c',
        secondary: '#25103f',
      },
      gridTemplateColumns: {
        '1/3': '1fr 2fr',
      },
      gridTemplateRows: {
        masonry: 'masonry',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
