import React from 'react';
import Link from 'next/link';
// import Footer from '../../components/layout/Footer';
import SignUpCard from '../../components/sign-up-page-components/SignUpCard';
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
          Create an account
        </h3>
      </section>
      <SignUpCard />
      <div className="text-center mt-4 mb-28 text-[14px]">
        <span>Already have an account? </span>
        <Link href="/sign-in">
          <a className="text--colors_primary">sign-in instead</a>
        </Link>
      </div>
    </UserAccessLayout>
  );
}

export default SignInPage;
