import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: "Bitter", body: "Segoe UI" };

const theme = extendTheme({
  colors: {
    text: { 100: "#93ADB7", 200: "#E4E4E4" },
    bg: "#000000",
    accent: "#1DC8E2",
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: "bg",
        color: "white",
        overflowX: "hidden",
      },
      p: {
        color: "#e0e0e0ce",
      },
    }),
  },
  fonts,
});

export default theme;
