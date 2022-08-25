import React from 'react';
import Image from 'next/image';

function TrendingCoinItem({ trendCoin }) {
  console.log(trendCoin);
  const { name, large, symbol, market_cap_rank, price_btc } = trendCoin.item;

  return (
    <div
      className="px-[12px] py-3 flex gap-3 rounded-lg shadow dark:border"
      style={{ boxShadow: '0 0 14px -5px rgb(25, 25, 25, 0.5)' }}
    >
      <div className="coin-logo w-[50px] h-[50px] relative">
        <Image src={large} alt={`${name} logo`} layout="fill" />
      </div>
      <div className="coin-identity flex justify-center flex-col gap-y-[4px]">
        <div className="text--colors_primary text-[12px] xsm:text-[15px]">{name}</div>
        <div className="text--colors_secondary text-[12px]">{symbol}</div>
      </div>
      <div className="market-details flex flex-col ml-auto justify-center gap-y-[6px] text-right">
        <div className="coin-price text-[12px]">
          <span className="text--colors_secondary">{price_btc.toFixed(7)}</span>
          <span>BTC</span>
        </div>
        <div className="coin-mkt-cap-rank text--colors_secondary text-[8px]">
          Mkt cap rank: <span className="text--colors_primary">{market_cap_rank}</span>
        </div>
      </div>
    </div>
  );
}

export default TrendingCoinItem;
