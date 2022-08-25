import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';

function MobileMenuBar({ hideMobileNav, closeMobileNav }) {
  return (
    <section
      className={`${
        closeMobileNav ? 'nav--slide-out' : 'nav--slide-in'
      } fixed py-8 px-4 top-0 right-0 translate-x-[-100%] left-0 lg:hidden min-h-screen w-full z-30 bg--default`}
    >
      <div className="close-btn fixed top-8 right-4" onClick={hideMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="20"
          //   height="20"
          fill="currentColor"
          className="bi bi-x-lg text--colors_secondary w-[20px] sm:w-[30px]"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-y-6 text-2xl font-bold text-left min-h-[300px] border-b">
        <Link href="/coin-watchlist">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700">
            <span>Coin watchlist</span>
          </a>
        </Link>
        <Link href="/trending-coins">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700">
            <span>Trending Coins</span>
          </a>
        </Link>
        <Link href="/crypto-news">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700">
            <span>Crypto News</span>
          </a>
        </Link>
      </div>
      <div className="pt-6 pb-8 border-b">
        <Socials />
      </div>
      <NewsletterSection />
    </section>
  );
}

export default MobileMenuBar;
