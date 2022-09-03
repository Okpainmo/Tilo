import React, { useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import MobileMenuBar from './MobileMenuBar';
import Navbar from './Navbar';
import Preloader from '../Preloader';

function MainAppLayout({ children }) {
  const [closeMobileNav, setCloseMobileNav] = useState(true);

  function hideMobileNav() {
    setCloseMobileNav(true);
  }

  function showMobileNav() {
    setCloseMobileNav(false);
  }

  console.log(closeMobileNav);

  return (
    <>
      <Preloader />
      <div className="overflow-hidden">
        <MobileMenuBar hideMobileNav={hideMobileNav} closeMobileNav={closeMobileNav} />
        <Navbar showMobileNav={showMobileNav} />
        <div className="pt-20">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default MainAppLayout;
