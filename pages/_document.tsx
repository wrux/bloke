import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-domain="bloke.blog"
            src="https://plausible.io/js/plausible.js"
          />
        </Head>
        <body>
          <div className="fixed top-4 left-4">
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:outline-black bg-gray-100 text-black ring-4 ring-brand ring-offset-4"
            >
              Skip to content
            </a>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
