import React from 'react';
import Emoji from '../../components/Emoji';
import MainAppLayout from '../../components/layout-components/MainAppLayout';

function Blog() {
  return (
    <MainAppLayout>
      <main className="flex w-full px-3 xsm:px-4 md:w-4/5 md:mx-auto text-xl text--colors_secondary min-h-screen sm:min-h-[500px] justify-center items-center text-center">
        <div>
          Hey <Emoji symbol="👋" label="waving-hand" />, <br />
          I'am so sorry, the blog feature isn't available in this release of tilo. <br />
          <a href="https://ajokpainmo.netlify.app" className="text--colors_primary">
            Andrew
          </a>{' '}
          is still building me up <Emoji symbol="😊" label="Smiling Face With Smiling Eyes" />.{' '}
          <br /> The blog feature will be ready in some day's time. <br />
          For now, do have a nice time exploring all the available features on tilo. <br />
          <br />
          <Emoji symbol="🙂🙂🙂" label="Slightly Smiling Faces" />
        </div>
      </main>
    </MainAppLayout>
  );
}

export default Blog;
