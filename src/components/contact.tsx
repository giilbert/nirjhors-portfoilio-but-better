import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export const Contact: React.FC = () => {
  return (
    <Flex>
      <Box p={{ base: "1rem 2rem", md: "4rem 8rem" }} w="100%" color="white">
        <Heading fontSize="4.5vmax">Get in Touch</Heading>
        <Flex mt="2rem" flexDir="column" gap="2rem" textTransform="uppercase">
          <Stack>
            <Heading textDecor="underline" fontSize="3vmax">
              Email Me
            </Heading>
            <Heading fontWeight="regular" fontSize="5vmax">
              nirjhor.nath@gmail.com
            </Heading>
          </Stack>

          <Stack>
            <Heading textDecor="underline" fontSize="3vmax">
              Or Find Me On
            </Heading>
            <Flex gap="2rem">
              <Heading fontSize="3vmax" fontWeight="regular">
                Instagram
              </Heading>
              <Heading fontSize="3vmax" fontWeight="regular">
                Twitter
              </Heading>
              <Heading fontSize="3vmax" fontWeight="regular">
                LinkedIn
              </Heading>
              <Heading fontSize="3vmax" fontWeight="regular">
                GitHub
              </Heading>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};
