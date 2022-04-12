import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef } from "react";
import { Project } from "./project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC<{
  entryRef: MutableRefObject<HTMLDivElement>;
  headingRef: MutableRefObject<HTMLDivElement>;
}> = ({ entryRef, headingRef }) => {
  const projectHeading = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const isMd = useBreakpointValue({ base: false, md: true, lg: false });

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",
          scrub: 1,
        },
      })
      .to(projectHeading.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 2,
        duration: 4,
      })
      .from(projectHeading.current, {
        y: 10,
      })
      .from(projects.current.children, {
        x: -200,
        opacity: 0,
        // delay: 2,
        stagger: 0.5,
        duration: 4,
      });
  }, []);

  return (
    <Flex
      h={{ base: null, md: "100vh" }}
      ref={entryRef}
      color="white"
      flexDir="column"
    >
      <Flex p={{ base: "1rem 2rem", md: "4rem 8rem" }} h="100%">
        <Flex flexDir="column" flex="1">
          <Box
            ref={projectHeading}
            clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          >
            <Heading fontSize="4.5vmax">Work</Heading>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="2vmax" mt={0}>
                A curated list of my best work
              </Text>
              <Flex gap="2rem" mt="1rem">
                <Button borderRadius="0" bgColor="white" color="black">
                  View More
                </Button>
                <Button
                  borderRadius="0"
                  bgColor="transparent"
                  border="0.0625rem solid white"
                >
                  Resume
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex
            gap="4rem"
            mt="2rem"
            h="100%"
            ref={projects}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Project />
            <Project />
            {!isMd && <Project />}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
