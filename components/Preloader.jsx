import React, { useState } from 'react';

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);

  return (
    <div
      className={` ${
        showPreloader ? 'flex' : 'hidden'
      } w-full h-screen bg--glass justify-center items-center text-center fixed z-50`}
    >
      <span className="preloader text-5xl italic montserrat font-bold text--colors_default">
        tilo.
      </span>
    </div>
  );
}

export default Preloader;
