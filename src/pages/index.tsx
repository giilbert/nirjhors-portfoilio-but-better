import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Skill } from "../components/skill";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const entryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <Hero entryRef={entryRef} headingRef={headingRef} />
      <Projects entryRef={entryRef} headingRef={headingRef} />
      <Flex h="50vh" color="white" flexDir="column">
        <Flex h="100%" flexDir="column">
          <Box p={{ base: "1rem 2rem", md: "4rem 8rem" }}>
            <Heading fontSize="4.5vmax">Skills</Heading>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="2vmax" mt={0}>
                Technologies I've Worked With
              </Text>
            </Flex>
          </Box>
          <Marquee gradient={false} speed={80} style={{}}>
            {[...Array(15)].map((_) => (
              <Skill />
            ))}
          </Marquee>
        </Flex>
      </Flex>
      <Flex h="100vh">
        <Flex h="100%" flexDir="column" color="white">
          <Box p={{ base: "1rem 2rem", md: "4rem 8rem" }}>
            <Heading fontSize="4.5vmax">Me, Myself & I</Heading>
          </Box>
        </Flex>
      </Flex>
      <Flex h="100vh">contact</Flex>
    </Box>
  );
};
