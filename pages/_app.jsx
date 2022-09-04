import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Preloader from '../components/Preloader';
import '../styles/globals.css';
// import NavbarContext from '../contexts/NavbarContext';

function MyApp({ Component, pageProps }) {
  return (
    <main className="bg--default text--colors_default nunito-sans">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
