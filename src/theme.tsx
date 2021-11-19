import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { heading: "Playfair Display", body: "Inter" };

const theme = extendTheme({
  colors: {
    bg: {
      800: "#1D1D1D",
      900: "#181818",
    },
    blue: "#92FCEC",
    pink: {
      200: "#E9C8D0",
      300: "#FFB6B6",
      400: "#FC8DA7",
    },
    text: "#FFF",
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: "bg.800",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        height: "100%",
      },
      "body::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  fonts,
});

export default theme;
