import { Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";

const Index = () => {
  return (
    <Box width="80%" margin="auto">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Box>
  );
};

export default Index;
