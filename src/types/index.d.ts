export declare global {
  export type Article = {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    content: string;
    url: string;
    publishedAt: string;
  };
}
