import { Box, Center, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface LoadingProps {}

const MotionImage = motion(Image);

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <Flex
      width="60%"
      margin="auto"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <MotionImage
        src="logo.svg"
        h="10rem"
        w="8rem"
        initial={{ transform: "rotate(0deg)" }}
        animate={{
          transform: "rotate(360deg)",
        }}
        transition={{ type: "spring", repeat: 1, duration: 1.3, delay: 0.4 }}
      />
      <Heading color="pink.200">Loading...</Heading>
    </Flex>
  );
};
