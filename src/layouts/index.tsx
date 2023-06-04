import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useAuth from '@/hooks/useAuth';
import React from 'react';

const Layout = ({ children }: any) => {
  useAuth();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
