import Head from "next/head";
import Image from "next/image";
import React from "react";
import About from "../components/about/about";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Nav from "../components/nav/nav";
import Projects from "../components/projects/projects";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/Home.module.css";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <div className={styles.container}>
        <Head>
          <title>Nirjhor Nath</title>
        </Head>
        <Sidebar />
        <Nav />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
