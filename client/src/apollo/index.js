import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const url = "http://localhost:4000";
const cache = new InMemoryCache();
const link = createHttpLink({ uri: url });

export const client = new ApolloClient({
  link,
  cache,
});
