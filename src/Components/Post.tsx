import React from "react";
import {
  createLazyFileRoute,
  getRouteApi,
  useNavigate,
} from "@tanstack/react-router";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowLeftSquare } from "react-bootstrap-icons";
const route = getRouteApi("/posts/$postId");

export function Post() {
  const { post, user } = route.useLoaderData();

  const navigate = useNavigate();

  return (
    <Box>
      <Button
        onClick={() => navigate({ to: "/posts" })}
        size="sm"
        fontSize="small"
        leftIcon={<ArrowLeftSquare />}
      >
        Go Back to posts
      </Button>

      <Flex
        mt={4}
        p={4}
        alignItems="center"
        border="2px solid lightgray"
        borderRadius="md"
        gap={3}
      >
        <Box>
          <Text fontSize="xx-large" fontWeight={"bold"} color="#0d6efd">
            #{post?.id}
          </Text>
        </Box>
        <Box flex="1">
          <Text fontWeight={"bold"}>{post?.title}</Text>
          <Text fontSize="small">{post?.body}</Text>

          <Text mt={4} fontSize="small" fontWeight={"bold"} color="gray">
            {user?.name} | {user?.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}