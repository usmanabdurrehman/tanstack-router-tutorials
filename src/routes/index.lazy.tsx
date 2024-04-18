import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return <div>Hello from Home!</div>;
}
