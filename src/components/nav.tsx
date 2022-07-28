import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Menu } from "./menu";

const MotionFlex = motion(Flex);

export const Nav: React.FC = () => {
  return (
    <MotionFlex
      mt="2rem"
      alignItems="center"
      justifyContent="space-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      zIndex={2}
      transition={{
        delay: 1,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1,
      }}
    >
      <Image src="/logo.svg" />
      <Menu />
    </MotionFlex>
  );
};
