import { queryOptions } from "@tanstack/react-query";

export const getFaultDetail = queryOptions({
  queryKey: ["GET_FAULT_DATA"],
  queryFn: async () => await (await fetch("http://localhost:7000/data")).json(),
});
