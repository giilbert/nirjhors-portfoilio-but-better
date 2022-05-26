import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: "Poppins", body: "Poppins" };

const theme = extendTheme({
  colors: {
    text: { 100: "#93ADB7", 200: "#E4E4E4" },
    bg: "#000",
    accent: "#1DC8E2",
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: "bg",
        color: "white",
        overflowX: "hidden",
      },
    }),
  },
  fonts,
});

export default theme;
