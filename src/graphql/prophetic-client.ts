import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseURL: string = (import.meta.env.VITE_BASE_URL as string) || "";

export const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});
