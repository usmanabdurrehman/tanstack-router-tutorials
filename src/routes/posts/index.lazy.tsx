import { createLazyFileRoute } from "@tanstack/react-router";
import { Posts } from "../../Components";

export const Route = createLazyFileRoute("/posts/")({
  component: Posts,
});
