import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export const Nav: React.FC = () => {
  return (
    <Flex
      borderBottom="0.0625rem solid white"
      w="100vw"
      h="5rem"
      alignItems="center"
      justifyContent="space-between"
      paddingInline={{ base: "2rem", md: "8rem" }}
    >
      <Text color="white" minW="16rem">
        Nirjhor Nath
      </Text>
      <HStack color="white" spacing="3rem">
        <Link>Work</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </HStack>
      {/* <HamburgerIcon color="white" w="2.15rem" h="2.15rem" /> */}
    </Flex>
  );
};
