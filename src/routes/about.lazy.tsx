import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Error } from "../Components";

export const Route = createLazyFileRoute("/about")({
  component: About,
  errorComponent: Error,
});

function About() {
  return <div>{{ x: 3 }}</div>;
}
