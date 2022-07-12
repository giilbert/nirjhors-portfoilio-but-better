import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Loading } from "../components/loading";
import { Nav } from "../components/nav";
import { Projects } from "../components/projects";
import { DATOCMS_ENDPOINT } from "../consts";
import { RefProvider } from "../context";
import { IIndexQuery } from "../query";

const QUERY = `
  query Query {
    hero {
      name
      title
      description
    }
    allProjects {
      name
      stack
      images {
        url
      }
      description
    }
    about {
      aboutMe
      headshot {
        url
      }
    }
    contact {
      blurb
      email
      github
      instagram
      linkedin
      twitter
    }
  }
`;

const MotionBox = motion(Box);

const Page: NextPage<{ query: IIndexQuery }> = ({ query }) => {
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
          <title>Nirjhor Nath</title>
          <meta content="Nirjhor Nath" property="og:title" />
          <meta content={query.hero.description} property="og:description" />
          <meta content="#1DC8E2" data-react-helmet="true" name="theme-color" />
        </Head>
      </>
    );

  return (
    <>
      <Head>
        <title>Nirjhor Nath</title>
        <meta content="Nirjhor Nath" property="og:title" />
        <meta content={query.hero.description} property="og:description" />
        <meta content="#1DC8E2" data-react-helmet="true" name="theme-color" />
      </Head>
      {!animating ? (
        <Layout>
          <RefProvider>
            <Nav {...query.contact} />
            <Hero {...query.hero} />
            <Projects projects={query.allProjects} />
            <About {...query.about} />
            <Contact {...query.contact} />
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

export const getStaticProps: GetStaticProps = async () => {
  const client = new GraphQLClient(DATOCMS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  const query = await client.request<IIndexQuery>(QUERY);

  return { props: { query } };
};
