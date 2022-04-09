import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
            @font-face {
                font-family: 'Heading';
                font-style: normal;
                font-weight: 400;
                src: url('/maginia.woff2')
            }
        `}
  />
);
