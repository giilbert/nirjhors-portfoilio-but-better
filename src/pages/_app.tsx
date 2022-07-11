import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/bitter";
import "@fontsource/space-mono";
import { AppProps } from "next/app";
import React from "react";
import "swiper/css";
import theme from "../theme";
import "focus-visible/dist/focus-visible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
