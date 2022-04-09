import { Center, Image } from "@chakra-ui/react";

export default () => (
  <Center h="100vh" overflow="hidden">
    <Image
      src="center-img.jpg"
      w="clamp(8rem, 40vmax, 24rem)"
      h="clamp(8rem, 40vmax, 24rem)"
      opacity="70%"
      transform="scale(5)"
      boxShadow="0 0 0.5rem 1rem #6f4c1c58, 0 0 1.8rem 2rem #6c441778"
    />
  </Center>
);
