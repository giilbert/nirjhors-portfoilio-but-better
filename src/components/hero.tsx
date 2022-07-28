import gsap from "gsap";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useRefs } from "../context";
import { motion } from "framer-motion";
import { Button } from "./button";

gsap.registerPlugin(ScrollTrigger);

const MotionText = motion(Text);

export const Hero: React.FC = () => {
  const { projects, headingRef, imgRef } = useRefs();
  const oob = useRef<HTMLDivElement[] | null>([]);
  const [lur, setLur] = useState(false);

  useEffect(() => {
    gsap
      .timeline()
      .to(imgRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 0.6,
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

  useEffect(() => {
    const [a, b, c] = oob.current;
    if (!lur || !a || !b || !c) return;
    let [x, y, z] = [0, 0, 0];

    const update = () => {
      x = performance.now() / 3000;
      y = performance.now() / 4000;
      z = performance.now() / 3900;

      a.style.transform = `rotateZ(${Math.sin(z) * 720}deg) rotateX(${
        x * 534
      }deg) rotateY(${Math.cos(x / 10) * 130}deg) `;
      b.style.transform = `rotateX(${Math.sin(x) * 320}deg) rotateZ(${
        Math.sin(z) * 280
      }deg) rotateY(${y * 980}deg) `;
      c.style.transform = `rotateY(${Math.sin(y) * 720}deg) rotateX(${
        Math.cos(x) * 360
      }deg) rotateZ(${Math.sin(y) * 220}deg)`;
    };

    const aa = setInterval(update);

    return () => {
      clearInterval(aa);
    };
  }, [lur, oob.current]);

  return (
    <Box h="100vh" display="flex" mt="-4.5rem" overflowY="hidden">
      <Flex
        flexDir="column"
        justifyContent="center"
        gap="1rem"
        ref={headingRef}
        position="relative"
      >
        <Text
          mt="34rem !important"
          fontFamily="Space Mono"
          color="accent"
          fontSize="1rem"
          ref={(el) => (oob.current[0] = el)}
        >
          CODE CAMP CODE CAMP CODE CAMP CODE CAMP CODE CAMP
        </Text>
        <Heading
          fontSize={{ base: "3rem", lg: "5rem" }}
          textTransform="uppercase"
          maxWidth="25ch"
          ref={(el) => (oob.current[1] = el)}
        >
          Welcome to Day 4 <br />
          of Code Camp!
        </Heading>
        <Text
          color="text.100"
          fontSize={{ base: "1rem", lg: "1.25rem" }}
          maxWidth="64ch"
          ref={(el) => (oob.current[2] = el)}
        >
          We will be beginning in a few minutes
        </Text>
        <Button mt="2rem" py="2" px="4" onClick={() => setLur(!lur)}>
          Nirjhor's website, butchered beautifully by Gilbert
        </Button>
      </Flex>
      <Flex
        clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        ref={imgRef}
        opacity={{ base: "60%", md: "100%" }}
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
