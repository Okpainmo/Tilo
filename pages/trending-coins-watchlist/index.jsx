import React from 'react';
// import Link from 'next/link';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import TrendingCoinItem from '../../components/trending-coins-watchlist-page-components/TrendingCoinItem';

function TrendingCoinsPage({ trendingCoins }) {
  // console.log(trendingCoins);

  return (
    <MainAppLayout>
      <main className="trending-coins-page min-h-[500px] w-full md:pt-10 px-[12px] sm:w-4/5 sm:mx-auto md:w-full md:px-10 xl:w-4/5">
        <h1 className="text--colors_primary font-bold text-2xl md:text-4xl">Trending Coins</h1>
        <div className="section-brief text--colors_secondary text-[12px] mt-3">
          A list of 7 trending coins in the last 24 hours. All trending coin prices as stated, are
          relative to the price of 1 Bitcoin(BTC) (source:
          <a href="https://coingecko.com" className="text--colors_primary">
            {' '}
            coingecko
          </a>
          )
        </div>
        <div className="coins-wrapper mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCoins.coins.map((trendCoin) => {
            return <TrendingCoinItem key={trendCoin.item.id} trendCoin={trendCoin} />;
          })}
        </div>
      </main>
    </MainAppLayout>
  );
}

export default TrendingCoinsPage;

export async function getServerSideProps(context) {
  // const { params } = context;
  const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
  const trendingCoins = await response.json();
  // console.log(trendingCoins);
  return {
    props: {
      trendingCoins
    }
  };
}
