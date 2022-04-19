import { Box, Flex } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const entryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <Hero entryRef={entryRef} headingRef={headingRef} />
      <Projects entryRef={entryRef} headingRef={headingRef} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
};
