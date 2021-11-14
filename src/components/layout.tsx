import { Box } from "@chakra-ui/layout";
import React from "react";
import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MotionBox
        initial={{ x: "-20%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, ease: [0.7, 0, 0.07, 1], duration: 1.5 }}
      >
        <Sidebar />
      </MotionBox>
      <Box marginLeft="4rem">{children}</Box>
    </>
  );
};
