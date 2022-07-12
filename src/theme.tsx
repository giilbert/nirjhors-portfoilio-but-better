import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: "Bitter", body: "Poppins" };

const theme = extendTheme({
  colors: {
    text: { 100: "#bfd2da", 200: "#E4E4E4" },
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
        color: "#ffffffc8",
      },
    }),
  },
  fonts,
});

export default theme;
