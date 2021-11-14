import { Box } from "@chakra-ui/layout";
import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHasBeenViewed } from "../hooks/useHasBeenViewed";

const MotionBox = motion(Box);

export const withFade = (Component: NextPage | React.FC) => (props) => {
  const animation = useAnimation();
  const showAnimation = useHasBeenViewed();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (showAnimation && !inView) return;

    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: 0.2,
        duration: 0.5,
      },
    },
    hidden: {
      y: entry,
      opacity: 0,
    },
  };

  return (
    <MotionBox ref={ref} animate={animation} variants={variants}>
      <Component {...props} />
    </MotionBox>
  );
};
