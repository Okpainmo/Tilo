import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';
import UserAuthLinks from '../UserAuthLinks';

function MobileMenuBar({ hideMobileNav, closeMobileNav }) {
  const loadingWatchlist = () => toast('Just a moment, coins-watchlist data is being fetched');
  const loadingTrending = () =>
    toast('Just a moment, trending-coins-watchlist data is being fetched');

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
      <div className="flex flex-col gap-y-6 text-2xl font-bold text-left min-h-[500px] border-b w-full">
        <Link href="/">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]">
            <span>Home</span>
          </a>
        </Link>
        <Link href="/coins-watchlist">
          <a
            onClick={loadingWatchlist}
            className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
          >
            <span>Coin watchlist</span>
          </a>
        </Link>
        <Link href="/trending-coins-watchlist">
          <a
            onClick={loadingTrending}
            className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]"
          >
            <span>Trending Coins</span>
          </a>
        </Link>
        <Link href="/crypto-news">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]">
            <span>Crypto News</span>
          </a>
        </Link>
        <Link href="/policy">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]">
            <span>Policy</span>
          </a>
        </Link>
        <Link href="/about">
          <a className="nav-link-colors min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%]">
            <span>About Tilo</span>
          </a>
        </Link>
      </div>
      <div className="pt-8 pb-8 border-b gap-6 sm:gap-12 flex flex-col sm:flex-row sm:items-center">
        <div className="flex gap-6 items-center">
          <UserAuthLinks />
        </div>
        <Socials />
      </div>
      <NewsletterSection />
    </section>
  );
}

export default MobileMenuBar;
