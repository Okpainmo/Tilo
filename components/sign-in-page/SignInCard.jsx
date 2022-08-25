import React from 'react';

function SignInCard() {
  return (
    <section
      className="sign-in-card w-full xsm:w-[350px] mx-auto py-10 px-6"
      style={{ boxShadow: '0 0 26px -10px rgba(50, 50, 50, 0.4)' }}
    >
      <form action="#" className="sign-in-form">
        <div className="input-wrapper flex flex-col">
          <label htmlFor="fullName" className="montserrat text-[13px]">
            Email Address
          </label>
          <input
            className="custom--input w-full py-2 px-4 mt-2 rounded"
            type="email"
            name="user-email"
            id="userEmail"
          />
        </div>
        <div className="input-wrapper flex flex-col mt-4">
          <label htmlFor="fullName" className="montserrat text-[13px]">
            Password
          </label>
          <input
            className="custom--input w-full py-2 px-4 mt-2 mb-2 rounded"
            type="email"
            name="user-email"
            id="userEmail"
          />
          <span className="text--colors_primary text-[14px]">forgot password?</span>
        </div>
        <button
          type="submit"
          className="montserrat btn--colors_regular mt-4 w-full font-bold py-3 px-4 rounded"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default SignInCard;
