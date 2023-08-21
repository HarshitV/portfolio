import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
