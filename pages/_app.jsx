import '../styles/globals.css';
// import NavbarContext from '../contexts/NavbarContext';

function MyApp({ Component, pageProps }) {
  return (
    <main className="bg--default text--colors_default nunito-sans">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
