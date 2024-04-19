import { createLazyFileRoute } from "@tanstack/react-router";
import { Post } from "../../Components/Post";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: Post,
});
