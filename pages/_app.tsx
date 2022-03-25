import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link
      href='https://fonts.googleapis.com/css?family=Cormorant Garamond'
      rel='stylesheet'
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
