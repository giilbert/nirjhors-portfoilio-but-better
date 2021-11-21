import { Text, Flex, Heading, Box, Link, Stack } from "@chakra-ui/react";
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
      <Heading
        fontWeight="normal"
        textTransform="uppercase"
        color="pink.200"
        fontSize="5vmax"
      >
        let's get in touch
      </Heading>
      <Text
        fontSize="3vmax"
        textTransform="uppercase"
        textDecoration="underline"
        color="pink.300"
      >
        nirjhor.nath@gmail.com
      </Text>
      <Flex justifyContent="space-between" alignItems="flex-start" mt="4rem">
        <Box>
          <Stack fontSize="2.5vmax" color="pink.200">
            <Link
              textDecoration="underline"
              textTransform="uppercase"
              href="https://twitter.com/iDarkThunder"
              target="_blank"
              _focus={{}}
            >
              twitter
            </Link>
            <Link
              textDecoration="underline"
              textTransform="uppercase"
              href="https://www.instagram.com/nirjhor.nath/"
              target="_blank"
              _focus={{}}
            >
              instagram
            </Link>
            <Link
              textDecoration="underline"
              textTransform="uppercase"
              href="https://www.github.com/iDarkLightning"
              target="_blank"
              _focus={{}}
            >
              github
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            maxW="20rem"
            textTransform="uppercase"
            color="pink.200"
            fontSize="clamp(0.5rem, 2.5vmax, 1.2rem)"
          >
            designed & built by Nirjhor Nath. Liked the site? Well, i just
            happen to have a guestbook. definetly did not copy this footer from{" "}
            <Link href="https://kyryloorlov.com">here</Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
});
