import React from "react";
import {
  createRootRoute,
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Box, Flex, Text } from "@chakra-ui/react";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
            <Link to="/fault" className="link">
              Fault
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
      <ReactQueryDevtools />
    </>
  ),
});
