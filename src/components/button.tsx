import {
  Button as ChakraButton,
  ButtonProps,
  useTheme,
} from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <ChakraButton
      w="12rem"
      color="black"
      borderRadius={0}
      fontWeight="regular"
      boxShadow="inset 0 0 0 0 white"
      transition="ease-out 0.5s"
      sx={{
        WebkitTransition: "ease-out 0.5s",
        MozTransition: "ease-out 0.5s",
      }}
      _hover={{ boxShadow: `inset 400px 0 0 0 ${theme.colors.accent}` }}
      display="inline-block"
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
