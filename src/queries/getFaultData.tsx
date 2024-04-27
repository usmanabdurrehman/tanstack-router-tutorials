import { queryOptions } from "@tanstack/react-query";
import { Post } from "../types";

export const getFaultData = queryOptions({
  queryKey: ["GET_FAULT"],
  queryFn: async () => {
    return await (await fetch("http://localhost:7000/data")).json();
  },
});
