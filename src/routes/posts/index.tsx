import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "../../queries/getPosts";

export const Route = createFileRoute("/posts/")({
  // loader: async () => {
  //   const posts: Post[] = await (
  //     await fetch("https://jsonplaceholder.typicode.com/posts")
  //   ).json();
  //   return posts;
  // },
  loader: async ({ context: { queryClient } }) => {
    return await queryClient.ensureQueryData(getPosts);
  },
});
