import { Text, Flex, Heading, Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { withFade } from "../helpers/withFade";

export const Contact: React.FC = withFade(() => {
  return (
    <Flex h="100vh" p="5% 0 5% 0" flexDirection="column">
      <Heading
        fontWeight="normal"
        textTransform="uppercase"
        color="pink.200"
        fontSize="8rem"
      >
        let's get in touch
      </Heading>
      <Text
        fontSize="5rem"
        textTransform="uppercase"
        textDecoration="underline"
        color="pink.300"
      >
        nirjhor.nath@gmail.com
      </Text>
      <Flex
        w="85%"
        justifyContent="space-between"
        alignItems="flex-start"
        mt="4rem"
      >
        <Box>
          <Text textTransform="uppercase" color="pink.200" fontSize="2rem">
            also reach me through
          </Text>
          <Stack fontSize="2rem" color="pink.200">
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
            fontSize="1.3rem"
          >
            designed & built by Nirjhor Nath. Liked the site? Well, i just
            happen to have a guestbook
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
});
