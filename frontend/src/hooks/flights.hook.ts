import { useQuery } from "react-query";

import { BackendClient } from "../clients/backend.client";

const backendClient = new BackendClient();

export interface MutationError {
  response: {
    data: {
      message: string;
    };
  };
}

export function useFlights() {
  const query = useQuery(["flights"], () => backendClient.getFlights());

  return query?.data?.data;
}
