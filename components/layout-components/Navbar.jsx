import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navlinks from './Navlinks';
import UserAuthLinks from '../UserAuthLinks';

const DynamicThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false
});

function Navbar({ showMobileNav }) {
  return (
    <nav
      className="bg--glass w-full py-2 px-3 md:py-4 md:px-4 lg:px-16 flex justify-between
    z-20 items-center montserrat fixed top-0 left-0 right-0"
      style={{ boxShadow: '0 5px 13px rgb(0 0 0 / 5%)' }}
    >
      <Link href="/">
        <a>
          <div className="brand text--colors_primary montserrat text-2xl font-bold italic">
            tilo.
          </div>
        </a>
      </Link>
      <Navlinks />
      <aside className="flex gap-4 lg:gap-0 items-center">
        <DynamicThemeSwitcher />
        <button
          onClick={showMobileNav}
          type="button"
          className="menu-button rounded-full w-[35px] 
          h-[35px] p-[7px] lg:w-[40px] lg:h-[40px] border lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-three-dots-vertical w-[20px] h-[20px] 
            lg:h-[25px] lg:w-[25px]"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        <div className="user-auth hidden lg:flex lg:items-center">
          <UserAuthLinks />
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
