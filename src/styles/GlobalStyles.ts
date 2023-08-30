import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font: normal normal normal 15px/1.875em raleway, sans-serif;
    font-weight: 100;
    line-height: 1.75em;
    font-size: revert;
  }

  h1, h2, h3, h4, h5, h6 {
    font: normal normal normal 72px/1.25em cormorantgaramond-light,
      cormorantgaramond, "cormorant garamond", serif;
    font-size: revert;
    margin: 0;
  }

  a,p {
    font: normal normal normal 15px/1.875em raleway, sans-serif;
    font-weight: 100;
    line-height: 1.75em;
    font-size: revert;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font: normal normal normal 15px/1.875em raleway, sans-serif;
  }
`;

export default GlobalStyle;
