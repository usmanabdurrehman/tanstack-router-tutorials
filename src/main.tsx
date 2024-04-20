import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Error, Loader, NotFound } from "./Components";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: Loader,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: Error,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
