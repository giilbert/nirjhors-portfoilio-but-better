import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import React, { useEffect } from "react";
import { Sidebar } from "./sidebar";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

export const Layout: React.FC = ({ children }) => {
  const sidebarDrawer = useBreakpointValue({ base: true, sm: true, md: false });
  const sidebar = useDisclosure();

  useEffect(() => window.addEventListener("scroll", sidebar.onClose), []);

  return (
    <>
      {!sidebarDrawer && <Sidebar delay={0.9} />}
      {sidebarDrawer && (
        <Stack direction="column">
          {!sidebar.isOpen && (
            <IconButton
              icon={<HamburgerIcon />}
              borderRadius="0"
              aria-label="view sidebar"
              color="white"
              bgColor="bg.900"
              position="fixed"
              zIndex={2}
              opacity="80%"
              onClick={sidebar.onOpen}
            />
          )}

          {sidebar.isOpen && (
            <MotionBox zIndex={2}>
              <Sidebar delay={0.001} />
            </MotionBox>
          )}
        </Stack>
      )}
      <Box
        marginLeft={!sidebarDrawer ? "4rem" : "0"}
        onClick={sidebar.isOpen ? sidebar.onClose : null}
      >
        {children}
      </Box>
    </>
  );
};
