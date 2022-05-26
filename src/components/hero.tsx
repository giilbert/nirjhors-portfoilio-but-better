import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRefs } from "../context";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { projects, headingRef, imgRef } = useRefs();

  useEffect(() => {
    gsap
      .timeline()
      .to(imgRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 0.05,
        duration: 0.8,
      })
      .from(headingRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.1,
      })
      .to(headingRef.current, {
        scrollTrigger: {
          trigger: projects.current,
          start: "top bottom",
          scrub: 1,
        },
        y: -300,
      })
      .to(imgRef.current, {
        scrollTrigger: {
          trigger: projects.current,
          start: "top bottom",
          scrub: 1,
        },
        scale: 1.1,
      });
  }, []);

  return (
    <Box h="100vh" display="flex" mt="-4.5rem" overflowY="hidden">
      <Flex
        flexDir="column"
        justifyContent="center"
        gap="1rem"
        ref={headingRef}
      >
        <Text fontFamily="Space Mono" color="accent" fontSize="1rem">
          Hi, my name is Nirjhor
        </Text>
        <Heading
          fontSize={{ base: "3rem", lg: "5rem" }}
          textTransform="uppercase"
          maxWidth="25ch"
        >
          I'm Developing Tommorow, Today
        </Heading>
        <Text
          color="text.100"
          fontSize={{ base: "1rem", lg: "1.25rem" }}
          maxWidth="64ch"
        >
          I’m an aspiring software engineer, nurturing my love for technology by
          developing software to facilitate exceptional digital experiences.
        </Text>
      </Flex>
      <Flex
        clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        ref={imgRef}
        opacity="60%"
        w={{ base: "100%", lg: "50%" }}
        position="absolute"
        h={{ base: "50vh", lg: "100vh" }}
        right={0}
        top={0}
        zIndex="-1"
        background="url(/hero.png)"
        backgroundSize="cover"
      />
    </Box>
  );
};
