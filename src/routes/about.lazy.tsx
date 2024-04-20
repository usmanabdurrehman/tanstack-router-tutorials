import { createLazyFileRoute } from "@tanstack/react-router";
import { Error } from "../Components";

export const Route = createLazyFileRoute("/about")({
  component: () => <div>{{ x: 3 }}</div>,
  errorComponent: Error,
});
