import React from 'react';
import dynamic from 'next/dynamic';
import Footer from './Footer';

const DynamicThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false
});

function UserAccessLayout({ children }) {
  return (
    <>
      <div className="fixed top-[25px] right-[25px]">
        <DynamicThemeSwitcher />
      </div>
      <main className="pt-20 px-[12px] min-h-screen sm:min-h-[500px]">{children}</main>
      <Footer />
    </>
  );
}

export default UserAccessLayout;
