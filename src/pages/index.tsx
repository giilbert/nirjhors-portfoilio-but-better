import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Loading } from "../components/loading";
import { Nav } from "../components/nav";
import { RefProvider } from "../context";

const MotionBox = motion(Box);

const Page: NextPage = () => {
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    if (!animating) {
      setAnimating(!sessionStorage.getItem("loading"));
    }

    setTimeout(() => {
      sessionStorage.setItem("loading", "true");
      setAnimating(false);
    }, 3000);
  }, []);

  if (loading)
    return (
      <>
        <Head>
          <title>Welcome!</title>
          <meta content="Welcome!" property="og:title" />
          <meta
            content="Welcome to Day 4 of Code Camp!"
            property="og:description"
          />
          <meta content="#1DC8E2" data-react-helmet="true" name="theme-color" />
        </Head>
      </>
    );

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta content="Welcome!" property="og:title" />
        <meta
          content="Welcome to Day 4 of Code Camp!"
          property="og:description"
        />
        <meta content="#1DC8E2" data-react-helmet="true" name="theme-color" />
      </Head>
      {!animating ? (
        <Layout>
          <RefProvider>
            <Nav />
            <Hero />
            <Footer />
          </RefProvider>
        </Layout>
      ) : (
        <MotionBox
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Loading />
        </MotionBox>
      )}
    </>
  );
};

export default Page;
