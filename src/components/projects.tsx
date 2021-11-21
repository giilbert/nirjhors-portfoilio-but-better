import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SwiperCore, { EffectCoverflow, Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { withFade } from "../helpers/withFade";
import { Project } from "./project";

SwiperCore.use([Navigation, EffectCoverflow]);

export const Projects: React.FC = withFade(() => {
  const slidesPerView = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 2.5 });
  const useSlider = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box minH={{ base: undefined, xl: "100vh" }} p="5% 0 5% 0" id="projects">
      <Box textTransform="uppercase">
        <Heading color="pink.200" fontWeight="normal" fontSize="5vmax">
          my work
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Heading
            fontFamily="inter"
            fontWeight="500"
            color="pink.300"
            fontSize="2.5vmax"
          >
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
      <Box mt="2rem">
        {useSlider ? (
          <Swiper
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            direction="horizontal"
            pagination={{ clickable: true }}
            navigation={true}
            initialSlide={1}
          >
            <SwiperSlide className="swiperSlide">
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
        ) : (
          <Stack>
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
            <Project
              href="/portfolio/project"
              src="project-image.jpg"
              name="project"
              stack="Typescript, NextJS, Chakra-UI"
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
});
