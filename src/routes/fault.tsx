import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Error } from "../Components/Error";
import { getFaultData } from "../queries/getFaultData";

export const Route = createFileRoute("/fault")({
  component: FaultComponent,
  errorComponent: Error,
});

function FaultComponent() {
  const { data } = useSuspenseQuery(getFaultData);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
