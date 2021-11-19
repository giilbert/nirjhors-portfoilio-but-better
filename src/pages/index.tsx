import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Loading } from "../components/loading";
import { Projects } from "../components/projects";

const MotionBox = motion(Box);

const Index = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (window.localStorage.getItem("timestamp"))
        window.localStorage.removeItem("timestamp");
    });
  }, []);

  return (
    <AnimatePresence>
      {!loading ? (
        <>
          <MotionBox
            key="content"
            zIndex="1"
            bgColor="bg.900"
            initial={{ height: "100vh" }}
            animate={{ height: "0" }}
            exit={{ undefined }}
            transition={{ delay: 0.1, ease: [0.7, 0, 0.07, 1], duration: 1.5 }}
          />
          <Layout>
            <Box width={{ base: "90%", sm: "90%", md: "80%" }} margin="auto">
              <Hero />
              <Projects />
              <About />
              <Contact />
            </Box>
          </Layout>
        </>
      ) : (
        <MotionBox
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.5 } }}
        >
          <Loading />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default Index;
