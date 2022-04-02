import {
  Text,
  Flex,
  Heading,
  Box,
  Link,
  Stack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { withFade } from "../helpers/withFade";

export const Contact: React.FC = withFade(() => {
  return (
    <Flex
      minH={{ base: undefined, xl: "100vh" }}
      p="5% 0 5% 0"
      flexDirection="column"
      id="contact"
    >
      <Center>
        <Heading color="white" fontWeight="500">
          Let's Get in Touch?
        </Heading>
      </Center>
    </Flex>
  );
});
