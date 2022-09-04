import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

function Navlinks() {
  const loadingWatchlist = () => toast('Just a moment, coins-watchlist data is being fetched');
  const loadingTrending = () =>
    toast('Just a moment, trending-coins-watchlist data is being fetched');

  return (
    <section className="hidden lg:flex ml-20 font-bold mr-auto gap-6 text--colors_primary text-[11px]">
      <Link href="/">
        <a className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700">
          <span>Home</span>
        </a>
      </Link>
      <Link href="/coins-watchlist">
        <a
          onClick={loadingWatchlist}
          className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700"
        >
          <span>Coin watchlist</span>
        </a>
      </Link>
      <Link href="/trending-coins-watchlist">
        <a
          onClick={loadingTrending}
          className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700"
        >
          <span>Trending Coins</span>
        </a>
      </Link>
      <Link href="/blog">
        <a className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700">
          <span>Blog</span>
        </a>
      </Link>
      <Link href="/policy">
        <a className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700">
          <span>Policy</span>
        </a>
      </Link>
      <Link href="/about">
        <a className="nav-link-colors mx-3 text-center hover:tracking-[1px] transition-all duration-700">
          <span>About Tilo</span>
        </a>
      </Link>
    </section>
  );
}

export default Navlinks;
