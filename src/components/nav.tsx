import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export const Nav: React.FC = () => {
  return (
    <MotionFlex
      mt="2rem"
      alignItems="center"
      justifyContent="space-between"
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      zIndex={2}
      transition={{
        delay: 1,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1,
      }}
    >
      <Image src="/logo.svg" />
      <HamburgerIcon w="3rem" h="3rem" opacity="80%" />
    </MotionFlex>
  );
};
