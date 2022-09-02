import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import Illustration from '../../public/market-bud.svg';
import Emoji from '../../components/Emoji';
import HighlightItem from '../../components/home-page-components/HighlightItem';

function HomePage() {
  return (
    <MainAppLayout>
      <main className="md:w-4/5 mx-auto xsm:px-[8px] sm:px-12 lg:w-full">
        <section className="hero-section px-[12px] flex flex-col lg:flex-row lg:gap-20 xl:gap-28 lg:mt-16 xl:w-[86%] xl:mx-auto">
          <div className="illustration w-full h-[350px] relative xsm:mt-8 lg:order-2">
            <Image src={Illustration} alt="tilo-illustration" layout="fill" />
          </div>
          <div className="flex flex-col w-full xsm:mt-8 lg:order-1 lg:mt-12">
            <div className="intro-text text-4xl font-[900] lg:italic text-center lg:text-left montserrat text--colors_primary leading-[55px] lg:leading-[40px]">
              Hey <Emoji symbol="👋" label="waving-hand" />, <br /> I'm{' '}
              <span className="text--colors_default italic">tilo</span>, your new crypto buddy
            </div>
            <div className="mt-4 text-center lg:text-left lg:mt-6 text-[17px] montserrat">
              I'am here to help you grow and become awesome at trading the top markets around the
              world.
            </div>
            <div className="w-full mt-6 lg:w-8/12 lg:mt-8">
              <Link href="/sign-up">
                <a>
                  <button
                    type="button"
                    className="btn--colors_regular rounded-md w-full py-3 px-4 lg:px-8 font-bold montserrat text-[18px]"
                  >
                    Let's get you started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="highlights-section px-[12px] w-full mt-16">
          <h3 className="text-2xl md:text-4xl text--colors_primary text-center font-bold md:mt-20">
            Below are some amazing ways I can help you
          </h3>
          <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-2 justify-center xl:grid-cols-3 xl:w-11/12 xl:mx-auto">
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            >
              I'll help you watch different coins on the crypto market.
              <div className="text--colors_primary underline ml-auto mt-2">
                <Link href="/coins-watchlist">
                  <a>explore coins watchlist</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              }
            >
              I'll show you top trending coins on the crypto market anytime.
              <div className="text--colors_primary underline ml-auto mt-2">
                <Link href="/trending-coins-watchlist">
                  <a>see trending coins</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            >
              Create an account to add your favourite coins, and watch them more conveniently.
              <div className="text--colors_primary underline ml-auto mt-2">
                <Link href="/sign-up">
                  <a>create an account</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              }
            >
              Explore and learn a lot more about coins on the crypto market. Simply click a coin
              icon, when you are on the coin watchlist page.
              <div className="text--colors_primary underline ml-auto mt-2">
                <Link href="/coins-watchlist">
                  <a>coin watchlist page</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              }
            >
              Keep up to date with news about crypto-currency anytime you like.
              <div className="text--colors_primary underline ml-auto mt-2">
                <Link href="/">
                  <a>coming soon</a>
                </Link>
              </div>
            </HighlightItem>
          </div>
          <p className="text-[20px] md:text-3xl mt-10 md:mt-28 text-center montserrat font-bold">
            I can't wait to get you onboarded. <br /> Get started by{' '}
            <Link href="/sign-up">
              <a className="text--colors_primary">creating a tilo account</a>
            </Link>{' '}
          </p>
        </section>
        <section className="round-up text-[16px] text--colors_secondary font-bold mt-12 md:mt-28 md:mb-20 px-3 text-center">
          <div>
            If you think tilo is super-cool, take some time out to connect with{' '}
            <a className="text--colors_primary" href="https//ajokpainmo.netlify.app">
              Andrew
            </a>{' '}
            . He coded every bit of my tilo awesomeness. <br /> You can follow him on <br />
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com"
                className="btn--colors_rounded text--colors_primary border p-[7px] mt-4 rounded-full inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <span className="mt-3">or connect on</span>
              <a
                href="https://linkedin.com"
                className="btn--colors_rounded border text--colors_primary p-[7px] mt-4 rounded-full inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default HomePage;
