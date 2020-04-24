import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";

const url = "http://localhost:4000"; // const URL = "http://localhost:4000" and move it to the consts file?
const cache = new InMemoryCache();
const link = createHttpLink({ uri: url });

const authLink = setContext((_, { headers }) => {
  const token = "FJ3R2R45883HIH93";
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});
