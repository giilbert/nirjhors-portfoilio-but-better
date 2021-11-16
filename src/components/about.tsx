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
    <Box h="max(100vh, 100%)" p="5% 0 5% 0">
      <Heading
        textTransform="uppercase"
        fontSize={{ sm: "2rem", md: "3rem", xl: "6rem" }}
        color="pink.200"
        fontWeight="normal"
      >
        me, myself, & i
      </Heading>
      <Flex
        alignItems="center"
        mt="4rem"
        flexDirection={{ base: "column-reverse", lg: "row" }}
      >
        <Stack flex="2" fontSize="1.8rem" spacing="2rem">
          <Text color="text">
            Hello! My name is Charlus Dogun Worth, and I saved the world at the
            age of 5. Shortly afterwards, I invented the concept of time and
            space. By the age of 10, i won four nobel prize awards for services
            to the galaxy. by the age of 14, i was the first human to set foot
            on mars.
          </Text>
          <Text color="text">
            2 years later, I have decided to settle down and pursue a career in
            software development. in the past two years, I have worked at Apple,
            Google, Microsoft, Meta, Netflix, Shopify, spotify, jetbrains and
            linode. now, I am a multi-trillionaire who wakes up at 3 aM every
            morning and goes to bed yesterday.
          </Text>
        </Stack>
        <Box flex="2">
          <Center>
            <Image src="me.svg" w="70%" />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
});
