import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Button } from "./button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";
import { IContact } from "../query";

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

export const Contact: React.FC<IContact> = (props) => {
  const self = useRef(null);
  const { about } = useRefs();
  const theme = useTheme();

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
          <Text fontFamily="Space Mono" color="accent">
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
          {props.blurb}
        </Text>
        <Link
          w="12rem"
          color="black"
          bgColor="white"
          p="0.5rem"
          borderRadius={0}
          border="0.2rem dotted"
          borderColor="accent"
          fontWeight="regular"
          boxShadow="inset 0 0 0 0 white"
          transition="ease-out 0.5s"
          sx={{
            WebkitTransition: "ease-out 0.5s",
            MozTransition: "ease-out 0.5s",
          }}
          _hover={{
            textDecor: "none",
            boxShadow: `inset 400px 0 0 0 ${theme.colors.accent}`,
          }}
          display="inline-block"
          href={`mailto:${props.email}`}
        >
          <Center gap="0.5rem">
            <Text fontWeight="600" color="black">
              Say Hello
            </Text>
            <Image src="/wave-emoji.svg" w="1.5rem" />
          </Center>
        </Link>
        <HStack spacing="1rem">
          <SVGLink
            to={props.twitter}
            src="icons/twitter.svg"
            alt="To Twitter Page"
            newTab
          />
          <SVGLink
            to={props.instagram}
            src="icons/instagram.svg"
            alt="To Instagram Page"
            newTab
          />
          <SVGLink
            to={props.github}
            src="icons/github.svg"
            alt="To GitHub Page"
            newTab
          />
          <SVGLink
            to={props.linkedin}
            src="icons/linkedin.svg"
            alt="To LinkedIn Page"
            newTab
          />
        </HStack>
      </Center>
    </Box>
  );
};
