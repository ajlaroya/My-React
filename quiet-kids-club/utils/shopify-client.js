import Client from "shopify-buy";

export const client = Client.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_API_ENDPOINT,
});