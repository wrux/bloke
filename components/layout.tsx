import React from 'react';
import Footer from './footer';
import Meta from './meta';

const Layout: React.FC = ({ children }) => (
  <>
    <Meta />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;
