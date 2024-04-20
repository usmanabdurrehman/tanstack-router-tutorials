import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFound } from "../../Components";
import { Post, User } from "../../types";

// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/users/1

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params }) => {
    const post: Post = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    ).json();

    if (!Object.keys(post).length) throw notFound();

    const user: User = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
    ).json();
    return { post, user };
  },
});
