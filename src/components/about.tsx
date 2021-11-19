import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { withFade } from "../helpers/withFade";

export const About: React.FC = withFade(() => {
  return (
    <Box minH={{ base: undefined, xl: "100vh" }} p="5% 0 5% 0">
      <Heading
        textTransform="uppercase"
        fontSize="5vmax"
        color="pink.200"
        fontWeight="normal"
      >
        me, myself, & i
      </Heading>
      <Flex
        alignItems="center"
        mt="4rem"
        flexDirection={{ base: "column-reverse", xl: "row" }}
      >
        <Stack flex="2" fontSize="clamp(1.5rem, 1.8vmax, 2rem)" spacing="2rem">
          <Text color="text">
            Hello! My name is Charlus Dogun Worth, and I saved the world at the
            age of 5. Shortly afterwards, I invented the concept of time and
            space. By the age of 10, i won four nobel prize awards for services
            to the galaxy. by the age of 14, i was the first human to set foot
            on mars.
          </Text>
          <Text color="text">
            Hello! My name is Charlus Dogun Worth, and I saved the world at the
            age of 5. Shortly afterwards, I invented the concept of time and
            space. By the age of 10, i won four nobel prize awards for services
            to the galaxy. by the age of 14, i was the first human to set foot
            on mars.
          </Text>
        </Stack>
        <Box flex="2" mb="4rem">
          <Center>
            <Image src="me.svg" />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
});
