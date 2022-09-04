import React from 'react';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import Emoji from '../../components/Emoji';

function AccountPage() {
  return (
    <MainAppLayout>
      <main className="px-3 w-full xsm:px-4 sm:px-8 md:w-10/12 mx-auto mt-6 min-h-screen">
        <section className="account-top">
          <div className="user flex justify-between items-center pb-6">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex flex-col justify-center">
                <div className="text-[13px] pt-[7px]">Welcome</div>
                <span className="font-bold montserrat italic">User</span>{' '}
              </div>
            </div>
            <div className="log-out-button">
              <button
                type="button"
                className="btn--colors_regular py-[6px] px-6 rounded montserrat font-bold"
              >
                Sign out
              </button>
            </div>
          </div>
        </section>
        <section className="mt-2">
          <h2 className="text-2xl font-bold montserrat pl-2 text--colors_primary border-b after:h-[3px] after:w-[75px] after:block after:bg--secondary after:mt-2">
            My watchlist
          </h2>
        </section>
        <section className="mt-8 flex w-full px-3 xsm:px-2 text-xl text--colors_secondary justify-center items-center text-center">
          <div>
            Hey <Emoji symbol="👋" label="waving-hand" />, <br />
            I'am so sorry, the account feature isn't fully setup yet.
            <br />
            <a href="https://ajokpainmo.netlify.app" className="text--colors_primary">
              Andrew
            </a>{' '}
            is still building me up <Emoji symbol="😊" label="Smiling Face With Smiling Eyes" />.{' '}
            <br />
            When fully set up, this page will contain the coins you select as favourites. That way,
            I can help you watch them more conveniently.
            <br />
            The account feature will be ready in some day's time. <br />
            For now, do have a nice time exploring all the available features on tilo. <br />
            <br />
            <Emoji symbol="🙂🙂🙂" label="Slightly Smiling Faces" />
          </div>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default AccountPage;
