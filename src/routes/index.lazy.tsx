import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <div>Hello /!</div>,
});

// /posts/
// /posts/:postId
