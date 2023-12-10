import service from "@/services";
import { API_KEY } from "@/configs/app";
import { NewsListing } from "./types";

// Fetch
export async function fetch(
  props: NewsListing.ListingAPIPayload
): Promise<NewsListing.ListingResponse> {
  return service({
    method: "GET",
    url: `/v2/everything?q=${props.query}&apiKey=${API_KEY}&page=${props.page}&pageSize=${props.pageSize}&language=${props.language}&sortBy=publishedAt`,
  });
}
