import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const StylableSwiperSlide = chakra(SwiperSlide);

const Project: React.FC<{
  href: string;
  src: string;
  name: string;
  stack: string;
}> = ({ href, src, name, stack }) => (
  <StylableSwiperSlide>
    <Box>
      <Link href={href}>
        <Box role="group">
          <Flex
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
            transition="0.2s"
            _groupHover={{ borderRadius: "10px" }}
          >
            <Image
              src={src}
              w="100%"
              h="100%"
              transition="0.3s ease"
              _groupHover={{
                transform: "scale(1.1)",
                filter: "brightness(0.5)",
              }}
            />
            <Text
              position="absolute"
              textTransform="uppercase"
              fontSize={{ sm: "2.5vw", md: "1.2vw" }}
              border="1px solid"
              borderColor="blue"
              color="blue"
              borderRadius="10px"
              padding="0px 6px"
              display="none"
              _groupHover={{ display: "flex !important" }}
            >
              Explore
            </Text>
          </Flex>
        </Box>
      </Link>
      <Box mt="2rem">
        <Heading
          fontSize="3rem"
          textTransform="uppercase"
          color="pink.200"
          fontWeight="normal"
        >
          {name}
        </Heading>
        <Heading
          fontWeight="normal"
          color="blue"
          fontFamily="inter"
          fontSize="1.3rem"
        >
          {stack}
        </Heading>
      </Box>
    </Box>
  </StylableSwiperSlide>
);

export const Projects: React.FC = ({}) => {
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    hidden: {
      y: entry,
      opacity: 0,
    },
  };

  return (
    <MotionBox
      h="100vh"
      p="5% 0 5% 0"
      // ref={ref}
      // animate={animation}
      // initial="hidden"
      // variants={variants}
    >
      <Box textTransform="uppercase">
        <Heading color="pink.200" fontWeight="normal" fontSize="6rem">
          my work
        </Heading>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontFamily="inter" fontWeight="500" color="pink.300">
            a curated list of my best work
          </Heading>
          <Button
            bgColor="blue"
            borderRadius="0"
            color="bg.800"
            textTransform="uppercase"
            _hover={{
              bgColor: "pink.300",
              transition: "background-color 800ms ease-in",
            }}
          >
            see more
          </Button>
        </Flex>
      </Box>
      <Box mt="4rem">
        <Swiper spaceBetween={50} slidesPerView={2.5}>
          <SwiperSlide>
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </MotionBox>
  );
};
