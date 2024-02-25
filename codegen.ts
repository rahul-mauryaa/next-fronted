import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:1337/graphql",
  documents: ["./src/apollo/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/apollo/types/gql/": {
      preset: "client",
    },
  },
};

export default config;
