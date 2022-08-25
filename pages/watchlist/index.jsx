import React, { useState } from 'react';
// import axios from 'axios';
import MainAppLayout from '../../components/layout/MainAppLayout';
import CoinItem from './components/CoinItem';

// const axios = require('axios');

function WatchPage({ coinData }) {
  console.log(coinData);
  return (
    <MainAppLayout>
      <main className="px-3 sm:px-8 w-full md:w-10/12 mx-auto">
        <div className="coin-search-tab">
          <input
            className="custom--input w-full px-4 py-3 rounded"
            type="text"
            placeholder="search a coin"
          />
        </div>
        <section className="coins-list-section pt-4 sm:pt-8 mt-2">
          <div className="list-categories flex pb-3 border-b">
            <div className="w-2/12 flex flex-row-reverse xl:w-[10%]">
              <div className="w-1/2 font-bold montserrat text-center">#</div>
            </div>
            <div className="w-2/12 text-center font-bold montserrat xl:w-[10%]">Coin</div>
            <div className="w-3/12 text-center font-bold montserrat xl:w-[10%]">Price</div>
            <div className="w-2/12 font-bold montserrat xl:w-[10%] text-center">24h</div>
            <div className="hidden xl:inline-block text-center font-bold montserrat xl:w-[15%]">
              Total vol
            </div>
            <div className="hidden xl:inline-block text-center font-bold montserrat xl:w-[15%]">
              Mkt cap
            </div>
            <div className="w-3/12 text-center font-bold montserrat xl:w-[30%]">Last 7 days</div>
          </div>
          {coinData.map((coin) => {
            return <CoinItem coin={coin} key={coin.id} />;
          })}
        </section>
      </main>
    </MainAppLayout>
  );
}

export default WatchPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true'
  );
  const coinData = await response.json();

  // const coinData = axios
  //   .get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
  //   )
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   });

  // const finalCoinData = JSON.stringify(coinData);

  return {
    props: {
      coinData
    }
  };
}
