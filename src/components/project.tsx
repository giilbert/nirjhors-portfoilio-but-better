import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Button } from "./button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";

gsap.registerPlugin(ScrollTrigger);

interface IProject {
  reverse?: boolean;
}

export const Project: React.FC<IProject> = ({ reverse }) => {
  const self = useRef();
  const { headingRef } = useRefs();

  useEffect(() => {
    gsap.from(self.current, {
      x: reverse ? 1000 : -1000,
      duration: 0.5,
      opacity: 0,
      stagger: 5,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <Flex
      w="100%"
      flexDir={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
      gap={{ base: "1rem", lg: "4rem" }}
      ref={self}
    >
      <Flex
        flex="1"
        bg="url(/project.webp)"
        minH="15rem"
        transition="filter 0.5s"
        _hover={{ filter: "brightness(100%)" }}
      />
      <Flex
        flex="1"
        flexDir="column"
        justifyContent="space-between"
        color="text.200"
      >
        <Heading color="white" fontSize="2rem" fontWeight="medium">
          Project
        </Heading>
        <Stack spacing="2rem" mt={{ base: "1rem", lg: "2rem" }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </Stack>
        <Stack mt="2rem">
          <Text color="accent" fontFamily="Space Mono">
            Typescript Python Prisma NextJS
          </Text>
          <Button>Explore</Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
