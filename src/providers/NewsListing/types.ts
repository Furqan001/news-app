export namespace NewsListing {
  // Fetch
  export type ListingProps = {
    query?: string;
    page?: number;
    pageSize?: number;
    language?: string;
    from?: string;
  };

  export type ListingResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
  };
  export interface ListingAPIPayload extends ListingProps {}
}
