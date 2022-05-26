import "@fontsource/inter";
import "@fontsource/playfair-display";
import "@fontsource/poppins";
import "swiper/css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import React, { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
