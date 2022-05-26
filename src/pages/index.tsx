import Head from "next/head";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { Projects } from "../components/projects";
import { RefProvider } from "../context";

export default () => {
  return (
    <>
      <Head>
        <title>Nirjhor Nath</title>
      </Head>
      <Layout>
        <RefProvider>
          <Nav />
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </RefProvider>
      </Layout>
    </>
  );
};
