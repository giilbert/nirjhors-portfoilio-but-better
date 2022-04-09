import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { heading: "Poppins", body: "Poppins" };

const theme = extendTheme({
  colors: {
    bg: {
      800: "#040305",
      900: "#181818",
    },
    accent: "#CE0045",
    pink: {
      200: "#E9C8D0",
      300: "#E9C8D0",
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
        backgroundImage: "url(bg.png)",
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
