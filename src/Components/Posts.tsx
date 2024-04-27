import { Flex, Text } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { getPosts } from "../queries/getPosts";

const route = getRouteApi("/posts/");

export function Posts() {
  const navigate = useNavigate();
  const { data: posts } = useSuspenseQuery(getPosts);

  return (
    <Flex flex="1" overflow="auto" gap={4} direction="column">
      {posts?.slice(0, 10).map((post) => (
        <Flex
          cursor={"pointer"}
          p={2}
          onClick={() => {
            navigate({ to: "/posts/$postId", params: { postId: post?.id } });
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
