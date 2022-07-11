import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Loading } from "../components/loading";
import { Nav } from "../components/nav";
import { Projects } from "../components/projects";
import { RefProvider } from "../context";
import { IQuery } from "../query";

const DATOCMS_ENDPOINT = "https://graphql.datocms.com";

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

const Page: NextPage<{ query: IQuery }> = ({ query }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Nirjhor Nath</title>
        <meta content="Nirjhor Nath" property="og:title" />
        <meta content={query.hero.description} property="og:description" />
        <meta content="#1DC8E2" data-react-helmet="true" name="theme-color" />
      </Head>
      {!loading ? (
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
          transition={{ opacity: { duration: 1 } }}
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

  const query = await client.request<IQuery>(QUERY);

  return { props: { query } };
};
