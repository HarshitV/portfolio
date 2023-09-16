import Footer from 'components/Footer';
import TopNav from 'components/Navigation/TopNav';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
