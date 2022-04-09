import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <Flex
      borderRight="0.0625rem solid white"
      h="100vh"
      w="5rem"
      flexDir="column"
      alignItems="center"
      zIndex={5000}
      justifyContent="space-between"
      bgColor="rgba(4, 8, 13, 0.5)"
      position="absolute"
    >
      <Text color="white" transform="rotate(-90deg)" minW="16rem">
        Nirjhor Nath
      </Text>
      <HamburgerIcon color="white" w="2.15rem" h="2.15rem" />
      <div />
    </Flex>
  );
};
