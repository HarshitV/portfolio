import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyles';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
