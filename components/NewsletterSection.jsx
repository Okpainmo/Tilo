import React from 'react';

function NewsletterSection() {
  return (
    <div className="newsletter-section mt-8 md:mt-20 lg:mt-0 sm:w-[450px] md:w-3/5 lg:w-1/3">
      <h2 className="text--colors_primary text-xl font-bold mb-2">NewsLetter</h2>
      <span className="text--colors_secondary">
        Join our newsletter, and get a weekly update of top trade news from around the world
      </span>
      <form action="#" className="newsletter-form mt-4 flex">
        <input className="custom--input px-4 py-2" type="text" />
        <button
          type="submit"
          className="btn--colors_regular px-4 py-2 text-[12px] font-bold montserrat"
        >
          Join in
        </button>
      </form>
    </div>
  );
}

export default NewsletterSection;
