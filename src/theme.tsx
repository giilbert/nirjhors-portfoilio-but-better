import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: "Heading", body: "Poppins" };

const theme = extendTheme({
  colors: {
    text: "#fff",
    bg: "#04080D",
  },
  styles: {
    global: () => ({
      body: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        // backgroundColor: "bg",
        background:
          "linear-gradient(180deg, #040C16 0%, rgba(4, 8, 13, 0.95) 183.48%);",
        // background:
        // "conic-gradient(from 138.23deg at 45.53% 46.22%, #04080D -1.62deg, #04080D 61.87deg, #04080D 147.39deg, #04080D 176.25deg, rgba(4, 8, 13, 0.984375) 339.36deg, #04080D 358.38deg, #04080D 421.87deg);",
      },
      "body::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  fonts,
});

export default theme;
