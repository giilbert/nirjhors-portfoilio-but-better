import { Box, Flex } from "@chakra-ui/react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      paddingInline={{ base: "2rem", lg: "5rem" }}
      marginInline="auto"
      justifyContent="center"
      maxWidth="100rem"
    >
      {children}
    </Flex>
  );
};
