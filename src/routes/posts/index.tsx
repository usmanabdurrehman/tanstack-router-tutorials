import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../../types";

export const Route = createFileRoute("/posts/")({
  loader: async () => {
    const posts: Post[] = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    return posts;
  },
});
