import { createLazyFileRoute } from "@tanstack/react-router";
import { Post } from "../../Components";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: Post,
});
