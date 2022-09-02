import React from 'react';
import Image from 'next/image';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import sanitizeHtml from 'sanitize-html';

import MainAppLayout from '../../../components/layout-components/MainAppLayout';

function CoinPage({ coinDetails }) {
  console.log(coinDetails);

  const { image, id, symbol, name, market_data, description } = coinDetails;
  const sanitizedCoinDescription = sanitizeHtml(coinDetails.description.en, {
    allowedTags: [],
    allowedAttributes: {}
  });

  console.log(sanitizeHtml(sanitizedCoinDescription));
  return (
    <MainAppLayout>
      <main className="coin-details-page px-[12px] xsm:px-4 sm:w-4/5 md:pt-10 sm:mx-auto lg:w-3/5">
        <div className="flex gap-6">
          <div className="w-[100px] h-[100px] relative z-10">
            <Image src={image.large} alt={`${id} logo`} layout="fill" />
          </div>
          <div className="flex flex-col justify-center montserrat gap-2">
            <div className="flex items-center gap-2">
              <div className="text-3xl text--colors_primary font-bold">{name}</div>
              <span className="pt-[5px] text--colors_secondary text-base">({symbol})</span>
            </div>
            <div className="text-xl">
              Price:{' '}
              <span className="text--colors_secondary">
                ${market_data.current_price.usd.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div className="last-7-days-chart w-full mt-8">
          <Sparklines data={market_data.sparkline_7d.price}>
            <SparklinesLine color="teal" />
          </Sparklines>
          <div className="text--colors_secondary text-[13px] text-center">
            Bitcoin market performance chart for the last seven(7) days.
          </div>
        </div>
        <section className="flex flex-col gap-4 mt-6">
          <h1 className="montserrat font-bold text-2xl text--colors_primary">Market Statistics</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6">
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Market cap</span>
              <span className="text--colors_secondary">
                ${market_data.market_cap.usd.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="font-bold mb-2 text-base">Mkt cap rank: </span>
              <span className="text--colors_secondary">{market_data.market_cap_rank}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Total volume</span>
              <span className="text--colors_secondary">
                ${market_data.total_volume.usd.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">24h high</span>
              <span className="text--colors_secondary">
                ${market_data.high_24h.usd.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">24h Low</span>
              <span className="text--colors_secondary">
                ${market_data.low_24h.usd.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 mt-12">
          <h1 className="montserrat font-bold text-2xl text--colors_primary">Price Performance</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6">
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Last 1 hour</span>
              <span
                className={`${
                  market_data.price_change_percentage_1h_in_currency.usd > 0
                    ? 'gain-alert-color'
                    : 'loss-alert-color'
                }`}
              >
                {market_data.price_change_percentage_1h_in_currency.usd.toFixed(4)}%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Last 24 hours</span>
              <span
                className={`${
                  market_data.price_change_percentage_24h_in_currency.usd > 0
                    ? 'gain-alert-color'
                    : 'loss-alert-color'
                }`}
              >
                {market_data.price_change_percentage_24h_in_currency.usd.toFixed(4)}%
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Last 7 days</span>
              <span
                className={`${
                  market_data.price_change_percentage_7d_in_currency.usd > 0
                    ? 'gain-alert-color'
                    : 'loss-alert-color'
                }`}
              >
                {market_data.price_change_percentage_7d_in_currency.usd.toFixed(4)}%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Last 30 days</span>
              <span
                className={`${
                  market_data.price_change_percentage_30d_in_currency.usd > 0
                    ? 'gain-alert-color'
                    : 'loss-alert-color'
                }`}
              >
                {market_data.price_change_percentage_30d_in_currency.usd.toFixed(4)}%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-2 text-base">Last 1 year</span>
              <span
                className={`${
                  market_data.price_change_percentage_1y_in_currency.usd > 0
                    ? 'gain-alert-color'
                    : 'loss-alert-color'
                }`}
              >
                {market_data.price_change_percentage_1y_in_currency.usd.toFixed(4)}%
              </span>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h1 className="montserrat font-bold text-2xl text--colors_primary">About {name}</h1>
          <div className="pt-2 leading-[25px]">{sanitizedCoinDescription}</div>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default CoinPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
  );
  const coinDetails = await response.json();

  return {
    props: {
      coinDetails
    }
  };
}
