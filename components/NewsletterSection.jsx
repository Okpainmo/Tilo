import React from 'react';

function NewsletterSection() {
  return (
    <section className="newsletter-section my-20 lg:mt-0 sm:w-[450px] md:w-3/5 lg:w-[300px]">
      <h2 className="text--colors_primary text-md font-bold mb-2">NewsLetter</h2>
      <div className="text--colors_secondary text-[12px] w-[85%]">
        Join our newsletter, and get a weekly update of top trade news from around the world
      </div>
      <form action="#" className="newsletter-form mt-4 flex">
        <input className="custom--input px-4 py-2" type="text" />
        <button
          type="submit"
          className="btn--colors_regular px-4 py-2 text-[12px] font-bold montserrat"
        >
          Join in
        </button>
      </form>
    </section>
  );
}

export default NewsletterSection;
