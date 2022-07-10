import { Box, Flex, Image } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { SectionHeader } from "./section-header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";
import { IAbout } from "../query";

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC<IAbout> = (props) => {
  const header = useRef(null);
  const text = useRef(null);
  const img = useRef(null);
  const { projects, about } = useRefs();

  useEffect(() => {
    gsap
      .timeline()
      .to(header.current, {
        scrollTrigger: {
          trigger: projects.current,
          start: "center top",
          scrub: 1,
        },
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
        duration: 1,
      })
      .from(text.current, {
        x: -1000,
        opacity: 0,
        scrollTrigger: {
          trigger: projects.current,
          start: "center top",
          scrub: 1,
        },
      })
      .from(img.current, {
        x: 1000,
        opacity: 0,
        scrollTrigger: {
          trigger: projects.current,
          start: "center top",
          scrub: 1,
        },
      });
  }, []);

  return (
    <Box padding="4rem 0" ref={about}>
      <Box
        ref={header}
        clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      >
        <SectionHeader title="Me, Myself, and I" sub="Who am I, Really?" />
      </Box>
      <Flex
        paddingTop="2rem"
        gap="2rem"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex
          flex="1.8"
          flexDir="column"
          gap="1rem"
          ref={text}
          dangerouslySetInnerHTML={{ __html: props.aboutMe }}
        />
        <Image
          ref={img}
          flex="1"
          src={props.headshot.url}
          objectFit="cover"
          w="100%"
          h="600px"
        />
      </Flex>
    </Box>
  );
};
