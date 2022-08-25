import React from 'react';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';

function Footer() {
  return (
    <footer className="border-t py-16 sm:py-32 px-3 sm:px-8 flex flex-col md:flex-row md:flex-wrap mt-12 justify-between xl:px-24">
      <div className="mb-10">
        <div className="brand text--colors_primary montserrat text-3xl font-bold md:w-1/2 lg:w-1/3">
          tilo.
        </div>
        <Socials />
      </div>
      <div className="menu-items flex gap-x-20 md:w-1/2 lg:w-1/3">
        <div>
          <h4 className="text--colors_primary font-bold text-base">Tilo Services</h4>
          <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
          </ul>
        </div>
        <div>
          <h4 className="text--colors_primary font-bold text-base">Help</h4>
          <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
          </ul>
        </div>
        <div>
          <h4 className="text--colors_primary font-bold text-base">Transparency</h4>
          <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
          </ul>
        </div>
      </div>
      <NewsletterSection />
    </footer>
  );
}

export default Footer;
