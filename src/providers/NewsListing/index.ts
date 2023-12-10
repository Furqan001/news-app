import { UseQueryResult, useQuery } from "@tanstack/react-query";

import * as api from "./api";
import { NewsListing } from "./types";

const KEY = "NewsListing";

const defaultParams = {
  query: "bitcoin",
  page: 1,
  pageSize: 20,
};
export function getKeyFromProps(props: any, type: "LISTING"): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

// Fetch
export function useNewsListing(
  props?: NewsListing.ListingProps
): UseQueryResult<NewsListing.ListingResponse> {
  const params = { ...defaultParams, ...props };
  return useQuery({
    queryKey: getKeyFromProps(params, "LISTING"),
    queryFn: () => api.fetch(params),
    retry: false,
  });
}
