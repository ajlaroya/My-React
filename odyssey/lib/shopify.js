import Client from "shopify-buy";

// Creats a shopify client and API call to shopify
export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});

// Response is stringified and parse to be used as JSON object later
export const parseShopifyResponse = (response) =>
  JSON.parse(JSON.stringify(response));
