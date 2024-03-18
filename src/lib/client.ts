import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// import { clientEnv } from "@/helper/env";
// clientEnv.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
const GRAPHQL_ENDPOINT = "http://localhost:1337/graphql";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
  });
});
