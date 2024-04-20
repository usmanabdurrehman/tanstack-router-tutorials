import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "../../Components";
import { Post } from "../../types";

// "https://jsonplaceholder.typicode.com/posts"

const PAGE_SIZE = 10;

export const Route = createFileRoute("/posts/")({
  beforeLoad: ({ search }) => {
    return { page: search?.page || 0 };
  },
  loader: async ({ context: { page } }) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const posts: Post[] = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    return posts?.slice(PAGE_SIZE * page, PAGE_SIZE * page + PAGE_SIZE);
  },
  validateSearch: (search: Record<string, unknown>): { page?: number } => {
    return { page: Number((search?.page as string) || "0") };
  },
});
