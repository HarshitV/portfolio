import TopNav from "components/Navigation/TopNav";
import GlobalStyle from "styles/GlobalStyles";

import type { AppProps } from "next/app";

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
