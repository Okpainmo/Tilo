import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <section className="hidden lg:flex ml-20 font-bold mr-auto gap-6 text--colors_primary text-[10px]">
      <Link href="/coins-watchlist">
        <a className="nav-link-colors min-w-[100px] text-center hover:tracking-[1px] transition-all duration-700">
          <span>Coin watchlist</span>
        </a>
      </Link>
      <Link href="/trending-coins-watchlist">
        <a className="nav-link-colors min-w-[100px] text-center hover:tracking-[1px] transition-all duration-700">
          <span>Trending Coins</span>
        </a>
      </Link>
      <Link href="/crypto-news">
        <a className="nav-link-colors min-w-[100px] text-center hover:tracking-[1px] transition-all duration-700">
          <span>Crypto News</span>
        </a>
      </Link>
    </section>
  );
}

export default Navlinks;
