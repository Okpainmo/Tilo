import React from 'react';
import Link from 'next/link';

function UserAuthLinks() {
  return (
    <>
      <Link href="sign-in">
        <a>
          <div className="nav-link-colors mr-6 w-[60px] font-bold text-[12px] text-center hover:tracking-[1px] transition-all duration-700">
            Sign In
          </div>
        </a>
      </Link>
      <Link href="sign-up">
        <a className="btn--colors_regular px-6 py-2 rounded font-bold text-[12px] hover:scale-105 ease-out duration-700">
          Sign Up
        </a>
      </Link>
    </>
  );
}

export default UserAuthLinks;
