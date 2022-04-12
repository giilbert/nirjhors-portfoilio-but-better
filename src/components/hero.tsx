import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef } from "react";
import { Nav } from "./nav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC<{
  entryRef: MutableRefObject<HTMLDivElement>;
  headingRef: MutableRefObject<HTMLDivElement>;
}> = ({ entryRef, headingRef }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: entryRef.current,
        start: "top bottom",
        scrub: 1,
      },
      scaleX: 1.2,
    });

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: entryRef.current,
        start: "top bottom",
        scrub: 1,
      },
      y: -200,
      opacity: 0,
    });
  }, []);

  return (
    <Box h="100vh">
      <Image
        src="hero.png"
        position="absolute"
        ref={imgRef}
        h="100vh"
        w="100vw"
      />
      <Nav />
      <Center h="100%" color="white">
        <Heading
          fontSize="6vw"
          fontWeight="500"
          textAlign="center"
          textTransform="uppercase"
          ref={headingRef}
        >
          Let's Develop Tommorow <br /> Today
        </Heading>
      </Center>
    </Box>
  );
};
