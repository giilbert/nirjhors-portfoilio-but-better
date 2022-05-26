import { Text, Flex, Heading, Box } from "@chakra-ui/react";

interface ISectionHeader {
  title: string;
  sub: string;
}

export const SectionHeader: React.FC<ISectionHeader> = ({ title, sub }) => {
  return (
    <Flex pt="4rem" flexDir="column" gap="0.5rem">
      <Heading fontSize="2.3rem" textTransform="uppercase" fontWeight="600">
        {title}
        <Box as="span" color="accent">
          .
        </Box>
      </Heading>
      <Text color="text.100" fontSize="1.2rem">
        {sub}
      </Text>
    </Flex>
  );
};
