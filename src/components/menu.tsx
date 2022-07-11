import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import React, { useEffect } from "react";
import { IContact } from "../query";
import { Cross as Hamburger } from "hamburger-react";

const MotionBox = motion(Box);
const StylableHamburger = chakra(Hamburger);

const LinkGroupWrapper: React.FC<React.PropsWithChildren<{ delay: number }>> =
  ({ delay, children }) => (
    <MotionBox
      py="4rem"
      display="flex"
      flexDir="column"
      initial={{ y: "-1000%" }}
      animate={{
        y: 0,
        transition: {
          delay,
          ease: [0.7, 0, 0.07, 1],
          duration: 1,
        },
      }}
      exit={{
        y: "-1000%",
        transition: {
          delay: 0.1,
          ease: [0.7, 0, 0.07, 1],
          duration: 0.5,
        },
      }}
    >
      {children}
    </MotionBox>
  );

export const Menu: React.FC<IContact> = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        <Box zIndex={50000}>
          <StylableHamburger toggle={onToggle} toggled={isOpen} />
        </Box>
        {isOpen && (
          <MotionBox
            key="menu"
            w="100vw"
            bgColor="#010C12"
            position="absolute"
            top={0}
            left={0}
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{
              ease: [0.7, 0, 0.07, 1],
              duration: 0.8,
            }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              h="100vh"
              gap="6vmax"
              flexDir={{ base: "column", md: "row" }}
            >
              <LinkGroupWrapper delay={0.3}>
                <Text
                  fontSize="max(1vmax, 1rem)"
                  textTransform="uppercase"
                  letterSpacing="0.5rem"
                >
                  Sitemap
                </Text>
                <NextLink href="/" passHref>
                  <Link fontSize="4vmax">Home</Link>
                </NextLink>
                <NextLink href="/work" passHref>
                  <Link fontSize="4vmax">Work</Link>
                </NextLink>
                <NextLink href="/writing" passHref>
                  <Link fontSize="4vmax">Writing</Link>
                </NextLink>
              </LinkGroupWrapper>
              <LinkGroupWrapper delay={0.5}>
                <Text
                  fontSize="max(1vmax, 1rem)"
                  textTransform="uppercase"
                  letterSpacing="0.5rem"
                >
                  Socials
                </Text>
                <Link fontSize="4vmax" target="_blank" href={props.instagram}>
                  Instagram
                </Link>
                <Link fontSize="4vmax" target="_blank" href={props.github}>
                  GitHub
                </Link>
                <Link fontSize="4vmax" target="_blank" href={props.twitter}>
                  Twitter
                </Link>
              </LinkGroupWrapper>
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};
