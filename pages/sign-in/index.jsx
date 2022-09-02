import React from 'react';
import Link from 'next/link';
import SignInCard from '../../components/sign-in-page-components/SignInCard';
import UserAccessLayout from '../../components/layout-components/UserAccessLayout';

function SignInPage() {
  return (
    <UserAccessLayout>
      <section className="text-center">
        <Link href="/">
          <a>
            <div className="brand text--colors_primary montserrat text-3xl font-bold italic">
              tilo.
            </div>
          </a>
        </Link>
        <h3 className="mt-3 mb-4 font-bold montserrat text--colors_secondary rounded-lg">
          Sign-in to your account
        </h3>
      </section>
      <SignInCard />
      <div className="text-center mt-4 mb-40 text-[14px]">
        <span>New to tilo? </span>
        <Link href="/sign-up">
          <a className="text--colors_primary">create an account</a>
        </Link>
      </div>
    </UserAccessLayout>
  );
}

export default SignInPage;
