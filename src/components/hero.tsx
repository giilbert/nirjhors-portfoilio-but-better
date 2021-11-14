import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export const Hero: React.FC = ({}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      h="100vh"
      w="80%"
      m="auto"
      flexDirection={{ sm: "column", lg: "row" }}
      overflow="hidden"
    >
      <MotionBox
        flex="3"
        initial={{ y: "200%" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1.5 }}
      >
        <Heading>
          Hi, I'm{" "}
          <Box as="span" color="blue" fontWeight="normal">
            Nirjhor,
          </Box>
        </Heading>
        <Heading
          textTransform="uppercase"
          color="pink.200"
          fontFamily="inter"
          fontStyle="normal"
          fontWeight="500"
          fontSize={{ sm: "2rem", md: "3rem", xl: "6rem" }}
        >
          full stack developer building{" "}
          <Box as="span" color="pink.400" textDecoration="underline">
            high quality
          </Box>{" "}
          production driven apps
        </Heading>
      </MotionBox>
      <MotionImage
        flex="1"
        src="hero-image.jpg"
        h="60%"
        opacity="70%"
        minW="25rem"
        ml={{ sm: null, lg: "-10vw" }}
        zIndex="-1"
        initial={{ y: "-200%" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, ease: [0.7, 0, 0.07, 1], duration: 1 }}
      />
    </Flex>
  );
};
