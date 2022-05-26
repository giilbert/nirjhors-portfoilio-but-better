import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Project } from "./project";
import { SectionHeader } from "./section-header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const { projects, headingRef } = useRefs();
  const header = useRef(null);

  useEffect(() => {
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top top",
        scrub: 1,
      },
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
    });
  }, []);

  return (
    <Box minH="100vh" ref={projects}>
      <Box
        ref={header}
        clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      >
        <SectionHeader title="My Work" sub="A curated list of my best work" />
      </Box>
      <Flex flexDir="column" gap="4rem" paddingTop="2rem">
        <Project />
        <Project reverse={true} />
        <Project />
      </Flex>
    </Box>
  );
};
