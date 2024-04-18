import React from "react";
import {
  createLazyFileRoute,
  getRouteApi,
  useNavigate,
} from "@tanstack/react-router";
import { Flex, Text } from "@chakra-ui/react";

export const Route = createLazyFileRoute("/posts/")({
  component: Post,
});

function Post() {
  const posts = Route.useLoaderData();

  const navigate = useNavigate();

  return (
    <Flex gap={4} direction="column">
      {posts?.slice(0, 10).map((post: any) => (
        <Flex
          cursor={"pointer"}
          p={2}
          onClick={() => {
            // <Link to="/blog/$postId" params={{ postId: '123' }}>
            //   Post 123
            // </Link>
            navigate({ to: `/posts/$postId`, params: { postId: post.id } });
          }}
          transition="0.2s"
          _hover={{
            border: "2px solid #0d6efd",
            color: "#0d6efd",
          }}
          border="2px solid lightgray"
          borderRadius="md"
          gap={4}
          alignItems="center"
        >
          <Text fontSize="x-large" fontWeight={"bold"} color="#0d6efd">
            #{post?.id}
          </Text>
          <Text fontSize="sm">{post.title}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
