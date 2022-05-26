import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Button } from "./button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";

gsap.registerPlugin(ScrollTrigger);

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

export const Contact: React.FC = () => {
  const self = useRef(null);
  const { about } = useRefs();

  useEffect(() => {
    gsap.to(self.current, {
      scrollTrigger: {
        trigger: about.current,
        start: "top top",
        scrub: 1,
      },
      delay: 1,
      duration: 1,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
    });
  }, []);

  return (
    <Box
      h={{ base: "60vh", lg: "100vh" }}
      ref={self}
      clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    >
      <Center h="100%" flexDir="column" gap="2rem">
        <Center flexDir="column">
          <Text fontFamily="SF Mono" color="accent">
            What Now?
          </Text>
          <Heading
            fontSize={{
              base: "2.5rem",
              md: "6rem",
              xl: "9.25rem",
            }}
            textTransform="uppercase"
          >
            Get in Touch
            <Box as="span" color="accent">
              !
            </Box>
          </Heading>
        </Center>
        <Text maxW="60ch" textAlign="center" color="text.100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
        <Button>Say Hello</Button>
        <HStack>
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
          <SVGLink
            to="https://www.linkedin.com/in/nirjhor-nath-b82317232/"
            src="icons/linkedin.svg"
            alt="To LinkedIn Page"
            newTab
          />
        </HStack>
      </Center>
    </Box>
  );
};
