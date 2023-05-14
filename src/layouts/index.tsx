import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
