import z from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z
    .string()
    .trim()
    .min(1)
    .default("http://localhost:9501"),
  NEXT_PUBLIC_APP_URL: z
    .string()
    .trim()
    .min(1)
    .default("http://localhost:3101"),
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: z
    .string()
    .trim()
    .min(1)
    .default("http://localhost:1337/graphql"),
  NEXT_PUBLIC_STRAPI_MEDIA_ENDPOINT: z
    .string()
    .trim()
    .min(1)
    .default("http://localhost:1337"),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  NEXT_PUBLIC_STRAPI_MEDIA_ENDPOINT:
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_ENDPOINT,
});
