import { Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { Hero } from "../components/hero";
import Projects from "../components/projects";

const Index = () => {
  return (
    <Box width="80%" margin="auto">
      <Hero />
      <Projects />
    </Box>
  );
};

export default Index;
