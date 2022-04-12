import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const Project: React.FC = () => (
  <Box flex="1" bgImage="url(dshb.png)" h="100%">
    <Flex
      m={{ base: "2rem", md: "4rem" }}
      justifyContent="space-between"
      flexDir="column"
      h="80%"
    >
      <Text fontWeight="800" fontSize="2vw">
        Discord Bot
      </Text>
      <Stack>
        <Heading fontSize="4vw">LiteBot</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          ex?
        </Text>
        <Button borderRadius="0" bgColor="white" color="black" w="6rem">
          Explore
        </Button>
      </Stack>
    </Flex>
  </Box>
);
