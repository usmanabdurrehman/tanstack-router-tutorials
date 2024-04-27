import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "../../queries/getPosts";

export const Route = createFileRoute("/posts/")({
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(getPosts);
  },
});
