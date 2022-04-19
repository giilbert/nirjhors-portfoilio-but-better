import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { Skill } from "./skill";

export const Skills: React.FC = () => {
  return (
    <Flex h={{ base: null, md: "50vh" }} color="white" flexDir="column">
      <Flex h="100%" flexDir="column">
        <Box p={{ base: "1rem 2rem", md: "4rem 8rem" }}>
          <Heading fontSize="4.5vmax">Skills</Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="2vmax" mt={0}>
              Technologies I've Worked With
            </Text>
          </Flex>
        </Box>
        <Marquee gradient={false} speed={80} style={{}}>
          {[...Array(15)].map((_) => (
            <Skill />
          ))}
        </Marquee>
      </Flex>
    </Flex>
  );
};
