import { queryOptions } from "@tanstack/react-query";
import { Post } from "../types";

export const getPosts = queryOptions({
  queryKey: ["GET_POSTS"],
  queryFn: async () => {
    const posts: Post[] = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    return posts;
  },
});
