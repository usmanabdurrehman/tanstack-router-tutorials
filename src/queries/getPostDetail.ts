import { queryOptions } from "@tanstack/react-query";
import { Post, User } from "../types";

export const getPostDetail = (postId: string) =>
  queryOptions({
    queryKey: ["GET_POST", postId],
    queryFn: async () => {
      const post: Post = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      ).json();

      const user: User = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/users/${post?.userId}`
        )
      ).json();
      return { post, user };
    },
  });
