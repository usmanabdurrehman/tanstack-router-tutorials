import React from "react";
import { createFileRoute, createLazyFileRoute } from "@tanstack/react-router";
import { Error } from "../Components/Error";

export const Route = createFileRoute("/pill")({
  component: About,
  errorComponent: Error,
});

function About() {
  return <div>s</div>;
}
