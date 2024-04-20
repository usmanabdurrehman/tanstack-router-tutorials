import { Button, Flex, Text } from "@chakra-ui/react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { Post } from "../types";

const route = getRouteApi("/posts/");

export function Posts() {
  const posts = route.useLoaderData();
  const navigate = useNavigate();
  const { page } = route.useSearch();

  return (
    <Flex gap={2} direction="column" height="100%">
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
      <Flex justifyContent={"flex-end"} gap={2}>
        <Button
          onClick={() => {
            navigate({ to: "/posts", search: { page: (page || 0) - 1 } });
          }}
          isDisabled={!page}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            navigate({ to: "/posts", search: { page: (page || 0) + 1 } });
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
