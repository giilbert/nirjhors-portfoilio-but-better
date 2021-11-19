import {
  Box,
  chakra,
  Flex,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SwiperSlide } from "swiper/react";

const StylableSwiperSlide = chakra(SwiperSlide);

export const Project: React.FC<{
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
          fontSize="clamp(0.5rem, 4vmax, 3rem)"
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
          fontSize="clamp(0.3rem, 3vmax, 1.3rem)"
        >
          {stack}
        </Heading>
      </Box>
    </Box>
  </StylableSwiperSlide>
);
