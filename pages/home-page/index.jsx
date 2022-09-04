import React from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Link from 'next/link';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import Illustration from '../../public/market-bud.svg';
import Emoji from '../../components/Emoji';
import HighlightItem from '../../components/home-page-components/HighlightItem';

function HomePage() {
  const loadingWatchlist = () => toast('Just a moment, coins-watchlist data is being fetched');
  const loadingTrending = () =>
    toast('Just a moment, trending-coins-watchlist data is being fetched');

  return (
    <MainAppLayout>
      <main className="md:w-4/5 mx-auto xsm:px-[8px] sm:px-12 lg:w-full">
        <section className="hero hero-section px-[12px] flex flex-col lg:flex-row lg:gap-20 xl:gap-28 lg:mt-16 xl:w-[86%] xl:mx-auto">
          <div className="illustration w-full h-[350px] relative mt-8 lg:order-2">
            <Image src={Illustration} alt="tilo-illustration" layout="fill" />
          </div>
          <div className="flex flex-col w-full mt-8 lg:order-1 lg:mt-12">
            <div className="intro-text text-[38px] font-[800] text-center lg:text-left poppins text--colors_primary leading-[55px] lg:leading-[45px]">
              Hey <Emoji symbol="👋" label="waving-hand" />, <br /> I'm{' '}
              <span className="text--colors_default italic">tilo</span>, your new crypto buddy
            </div>
            <div className="mt-4 text-center lg:text-left lg:mt-6 text-[17px]">
              I'am here to help you grow and become awesome at trading the top markets around the
              world.
            </div>
            <div className="w-full mt-8 lg:w-8/12">
              <Link href="/sign-up">
                <a>
                  <button
                    type="button"
                    className="btn--colors_regular rounded-md w-full py-3 px-4 lg:px-8 text-[18px] poppins"
                  >
                    Let's get you started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="highlights-section px-[12px] w-full mt-16">
          <h3 className="text-2xl md:text-4xl text--colors_primary text-center font-bold md:mt-28">
            Below are some amazing ways I can help you
          </h3>
          <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-2 justify-center xl:grid-cols-3 xl:w-11/12 xl:mx-auto">
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              I'll help you watch different coins on the crypto market.
              <div className="text--colors_primary ml-auto mt-2">
                <Link href="/coins-watchlist">
                  <a onClick={loadingWatchlist}>explore coins watchlist</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              I'll show you top trending coins on the crypto market anytime.
              <div className="text--colors_primary ml-auto mt-2">
                <Link href="/trending-coins-watchlist">
                  <a onClick={loadingTrending}>see trending coins</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Create an account to add your favourite coins, and watch them more conveniently.
              <div className="text--colors_primary ml-auto mt-2">
                <Link href="/sign-up">
                  <a>create an account</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-1.5 0v-2.25H7.5a.75.75 0 010-1.5h2.25V7.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Explore and learn a lot more about coins on the crypto market. Simply click a coin
              icon, when you are on the coin watchlist page.
              <div className="text--colors_primary ml-auto mt-2">
                <Link href="/coins-watchlist">
                  <a>coin watchlist page</a>
                </Link>
              </div>
            </HighlightItem>
            <HighlightItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                    clipRule="evenodd"
                  />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>
              }
            >
              Keep up to date with news about crypto-currency anytime you like.
              <div className="text--colors_primary ml-auto mt-2">
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
                href="https://twitter.com/AJ_Okpainmo"
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
              <span className="mt-3">or connect with him on</span>
              <a
                href="https://www.linkedin.com/in/okpainmo-andrew/"
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
