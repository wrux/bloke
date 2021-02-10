import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '@styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
