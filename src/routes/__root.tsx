import React from "react";
import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex direction={"column"} height="100vh">
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          h={"60px"}
          pl={4}
          pr={4}
          mb={2}
          bg="#000071"
        >
          <Text fontWeight={"bold"} fontSize="large" color="white">
            <Link to="/">Study.io</Link>
          </Text>
          <Flex alignItems={"center"} gap={4}>
            <Link to="/about" className="link" preload="intent">
              About
            </Link>
            <Link to="/posts" className="link">
              Posts
            </Link>
          </Flex>
        </Flex>
        <Box flex="1" overflow="auto" p={2}>
          <Outlet />
        </Box>
      </Flex>

      <TanStackRouterDevtools />
    </>
  ),
});
