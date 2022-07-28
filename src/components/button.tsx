import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton
      w="min-content"
      color="white"
      variant="outline"
      borderColor="accent"
      border="0.125rem solid"
      fontWeight="500"
      _hover={{ bgColor: "accent" }}
      display="inline-block"
      _focus={{ outline: "none" }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
