import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Button } from "./button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";
import { IProject } from "../query";

gsap.registerPlugin(ScrollTrigger);

export const Project: React.FC<IProject & { reverse?: boolean }> = ({
  reverse,
  ...props
}) => {
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
        bg={`url(${props.images[0].url})`}
        sx={{ aspectRatio: "16 / 9" }}
        minH="15rem"
        transition="filter 0.5s"
        _hover={{ filter: "brightness(100%)" }}
        backgroundSize="cover"
      />
      <Flex
        flex="1"
        flexDir="column"
        justifyContent="space-between"
        color="text.200"
      >
        <Heading color="white" fontSize="2rem" fontWeight="700">
          {props.name}
          <Box as="span" color="accent">
            .
          </Box>
        </Heading>
        <Flex
          flexDir="column"
          gap="2rem"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <Stack mt="2rem">
          <Text color="accent" fontFamily="Space Mono">
            {props.stack}
          </Text>
          {/* <Button>Explore</Button> */}
        </Stack>
      </Flex>
    </Flex>
  );
};
