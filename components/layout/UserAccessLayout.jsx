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
      <main className="pt-16 px-3">
        {children}
        <Footer />
      </main>
    </>
  );
}

export default UserAccessLayout;
