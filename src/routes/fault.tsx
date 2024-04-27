import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fault")({
  component: FaultComponent,
});

function FaultComponent() {
  return "Fault";
}
