import React from 'react';
import Footer from './footer';
import Meta from './meta';

const Layout: React.FC = ({ children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
