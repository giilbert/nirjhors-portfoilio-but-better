import { Text, Flex, Heading } from "@chakra-ui/react";

interface ISectionHeader {
  title: string;
  sub: string;
}

export const SectionHeader: React.FC<ISectionHeader> = ({ title, sub }) => {
  return (
    <Flex pt="4rem" flexDir="column" gap="0.5rem">
      <Heading fontSize="2.5rem" textTransform="uppercase" fontWeight="600">
        {title}
      </Heading>
      <Text color="text.100" fontSize="1.5rem">
        {sub}
      </Text>
    </Flex>
  );
};
