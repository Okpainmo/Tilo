import React, { useState } from 'react';
import Footer from './Footer';
import MobileMenuBar from './MobileMenuBar';
import Navbar from './Navbar';

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
    <div className="overflow-hidden">
      <MobileMenuBar hideMobileNav={hideMobileNav} closeMobileNav={closeMobileNav} />
      <Navbar showMobileNav={showMobileNav} />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}

export default MainAppLayout;
