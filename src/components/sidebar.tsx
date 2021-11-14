import { Flex, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";

const SVGLink: React.FC<{
  to: string;
  src: string;
  alt: string;
  newTab?: boolean;
}> = ({ to, src, alt, newTab }) => (
  <Link href={to} target={newTab ? "_blank" : undefined}>
    <Image src={src} alt={alt} />
  </Link>
);

export const Sidebar: React.FC = ({}) => {
  return (
    <Flex
      w="4rem"
      h="100vh"
      bgColor="bg.900"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding="5% 0 5% 0"
      position="fixed"
    >
      <SVGLink to="/" src="logo.svg" alt="Logo"></SVGLink>
      <VStack>
        <SVGLink
          to="/portfolio"
          src="icons/portfolio.svg"
          alt="To Portfolio Page"
        />
        <SVGLink to="/about" src="icons/about.svg" alt="To About Page" />
        <SVGLink to="/contact" src="icons/contact.svg" alt="Contact Me" />
      </VStack>
      <VStack>
        <SVGLink
          to="https://twitter.com/iDarkThunder"
          src="icons/twitter.svg"
          alt="To Twitter Page"
          newTab
        />
        <SVGLink
          to="https://www.instagram.com/nirjhor.nath/"
          src="icons/instagram.svg"
          alt="To Instagram Page"
          newTab
        />
        <SVGLink
          to="https://www.github.com/iDarkLightning"
          src="icons/github.svg"
          alt="To GitHub Page"
          newTab
        />
      </VStack>
    </Flex>
  );
};
