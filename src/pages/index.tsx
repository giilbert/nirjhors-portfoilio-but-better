import Head from "next/head";
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
    <Box>
      <Head>
        <title>Nirjhor Nath</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#181818" />
      </Head>
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
              transition={{
                delay: 0.1,
                ease: [0.7, 0, 0.07, 1],
                duration: 1.5,
              }}
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
    </Box>
  );
};

export default Index;
