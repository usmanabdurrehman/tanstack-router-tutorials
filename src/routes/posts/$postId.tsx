import { createFileRoute, notFound } from "@tanstack/react-router";
import { Post, User } from "../../types";
import { Loader, NotFound } from "../../Components";

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params }) => {
    const { postId } = params;
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const post: Post = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    ).json();

    if (!Object.keys(post).length) throw notFound();

    const user: User = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
    ).json();

    return { post, user };
  },
  pendingComponent: Loader,
  notFoundComponent: NotFound,
});
