import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { withFade } from "../helpers/withFade";

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

export const Projects: React.FC = withFade(() => {
  const slidesPerView = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 2.5 });

  return (
    <Box h="max(100vh, 100%)" p="5% 0 5% 0" id="projects">
      <Box textTransform="uppercase">
        <Heading
          color="pink.200"
          fontWeight="normal"
          fontSize={{ sm: "2rem", md: "3rem", xl: "6rem" }}
        >
          my work
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
        >
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
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          mousewheel={{ invert: true }}
        >
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
    </Box>
  );
});
