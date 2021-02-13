import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '@styles/index.css';
import { AnimateSharedLayout } from 'framer-motion';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AnimateSharedLayout>
    <Component {...pageProps} />
  </AnimateSharedLayout>
);

export default MyApp;
