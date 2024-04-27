import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPostDetail } from "../../queries/getPostDetail";
import { Post, User } from "../../types";

// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/users/1

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData(getPostDetail(params.postId));
  },
});
