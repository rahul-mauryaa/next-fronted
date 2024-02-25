import { clientEnv } from "@/helper/env";

export const getStrapiMediaURL = (url: string) => {
  if (!url) return null;

  return clientEnv.NEXT_PUBLIC_STRAPI_MEDIA_ENDPOINT.concat(url);
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
