import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "@/theme/theme"

const GlobalStyle = ({ children }) => {

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 320px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

        .custom-select {
          position: relative;
          font-family: Arial;
        }

        .custom-select select {
          display: none; 
        }

        .select-selected {
          background-color: DodgerBlue;
        }

        .select-selected:after {
          position: absolute;
          content: "";
          top: 14px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: #fff transparent transparent transparent;
        }

        .select-selected.select-arrow-active:after {
          border-color: transparent transparent #fff transparent;
          top: 7px;
        }

        .select-items div,.select-selected {
          color: #ffffff;
          padding: 8px 16px;
          border: 1px solid transparent;
          border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
          cursor: pointer;
        }

        .select-items {
          position: absolute;
          background-color: DodgerBlue;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 99;
        }

        .select-hide {
          display: none;
        }

        .select-items div:hover, .same-as-selected {
          background-color: rgba(0, 0, 0, 0.1);
        }
        `}
      />
      {children}
    </>
  );
};


function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <GlobalStyle />
  <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp
