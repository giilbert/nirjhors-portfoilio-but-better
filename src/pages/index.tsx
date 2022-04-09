import {
  Text,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const showSidebar = useBreakpointValue({ base: false, md: true });
  const [progress, setProgress] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      if (progress && progress <= 0) return setProgress(null);

      router.prefetch("/projects");
      if (progress >= 4000 && e.deltaY > 0) return router.push("/projects");

      setProgress((p) => (e.deltaY > 0 ? p + 300 : p - 300));
    };

    window.addEventListener("wheel", handler);

    return () => window.removeEventListener("wheel", handler);
  }, [progress]);

  return (
    <>
      <Flex flexDir="column" overflow="hidden">
        {showSidebar && <Sidebar />}
        <Box h="100vh">
          <Flex
            justifyContent="flex-end"
            w="100%"
            gap="3rem"
            color="white"
            p="3rem 4rem"
          >
            <Link>Work</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </Flex>
          <Center
            w="100%"
            flexDir="column"
            color="white"
            textTransform="uppercase"
            gap="1rem"
          >
            <Heading
              fontWeight="400"
              fontSize="clamp(2rem, 4vmax, 6rem)"
              zIndex={1}
            >
              Developing Tommorow
            </Heading>
            <HStack
              transform={`scale(${progress >= 0 ? progress / 1000 + 1 : 1})`}
              transition="transform ease-in 0.1s"
            >
              <Image
                src="center-img.jpg"
                w="clamp(8rem, 40vmax, 24rem)"
                h="clamp(8rem, 40vmax, 24rem)"
                borderRadius={`${!progress ? 50 : 50 - progress / 50}%`}
                opacity="70%"
                boxShadow="0 0 0.5rem 1rem #6f4c1c58, 0 0 1.8rem 2rem #6c441778"
              />
            </HStack>
            <Center flexDir="column" gap="1.8rem">
              <Heading fontWeight="400" fontSize="clamp(3rem, 5vmax, 6.5rem)">
                Today
              </Heading>
              <Text fontFamily="Heading" fontSize="1.5rem">
                Scroll
              </Text>
            </Center>
          </Center>
        </Box>
      </Flex>
    </>
  );
};
