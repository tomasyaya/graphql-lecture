import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { URL } from "../constants";

const cache = new InMemoryCache();
const link = createHttpLink({ uri: URL });

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
