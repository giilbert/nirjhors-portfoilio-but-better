import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Project } from "./project";
import { SectionHeader } from "./section-header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";
import { IProject } from "../query";

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const { projects: self, headingRef } = useRefs();
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
    <Box minH="100vh" ref={self}>
      <Box
        ref={header}
        clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      >
        <SectionHeader title="My Work" sub="A curated list of my best work" />
      </Box>
      <Flex flexDir="column" gap="4rem" paddingTop="2rem">
        {projects.map((project, index) => (
          <Project {...project} reverse={index % 2 !== 0} />
        ))}
      </Flex>
    </Box>
  );
};
