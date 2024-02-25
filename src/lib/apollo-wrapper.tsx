"use client";

import { clientEnv } from "@/helper/env";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const GRAPHQL_ENDPOINT =
  clientEnv.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:1337/graphql";

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,

    // fetchOptions: { cache: "no-store" }, // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // This strips all interfaces with a `@defer` directive from the queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
