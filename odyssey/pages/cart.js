import React from "react";

import { shopifyClient, parseShopifyResponse } from "../lib/shopify";
import { HeaderResponsive } from "../components/Header";

import { links } from "../utils/constants";

const cart = ({ shoppingCart, checkoutId, updatedCart }) => {
  {console.log(shoppingCart)}
  {console.log(updatedCart)}

  return (
    <>
      <HeaderResponsive links={links} />
      <h1>Cart</h1>
      <p>{shoppingCart.webUrl}</p>
      <p>{shoppingCart.currencyCode}</p>
      <p>Payment Due: {shoppingCart.paymentDue}</p>
      <p>Subtotal: {shoppingCart.subtotalPrice}</p>
      <p>Total: {shoppingCart.totalPrice}</p>
    </>
  );
};

export default cart;

export const getServerSideProps = async () => {
  // Fetch all the collections
  const cart = await shopifyClient.checkout.create();
  const shoppingCart = parseShopifyResponse(cart);
  
  const checkoutId = cart.id // ID of an existing checkout
  const lineItemsToAdd = [
    {
      variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==",
      quantity: 5,
      customAttributes: [{ key: "MyKey", value: "MyValue" }],
    },
  ];

  // Add an item to the checkout
  const updatedCart = parseShopifyResponse(shopifyClient.checkout.addLineItems(checkoutId, lineItemsToAdd));

  return {
    props: {
      shoppingCart,
      checkoutId,
      updatedCart,
    },
  };
};
