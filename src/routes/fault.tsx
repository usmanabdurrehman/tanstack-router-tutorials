import { Button } from "@chakra-ui/react";
import {
  queryOptions,
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  createFileRoute,
  ErrorComponentProps,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Error } from "../Components/Error";
import { getFaultDetail } from "../queries/getFaultData";

export const Route = createFileRoute("/fault")({
  loader: async ({ context: { queryClient } }) => {
    return await queryClient.ensureQueryData(getFaultDetail);
  },
  errorComponent: Error,
  component: FaultComponent,
});

function FaultComponent() {
  const { data } = useSuspenseQuery(getFaultDetail);
  return JSON.stringify(data || "{}");
}
