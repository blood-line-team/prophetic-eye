import { CodegenConfig } from "@graphql-codegen/cli";

const baseURL = process.env.VITE_BASE_URL;

if (!baseURL) {
  throw new Error("GRAPHQL_ENDPOINT is not defined. Check your .env file.");
}

const config: CodegenConfig = {
  schema: baseURL,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
