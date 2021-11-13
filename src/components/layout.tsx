import { Box } from "@chakra-ui/layout";
import React from "react";
import { Sidebar } from "./sidebar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box marginLeft="4rem">{children}</Box>
    </>
  );
};
