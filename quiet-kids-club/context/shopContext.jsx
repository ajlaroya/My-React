"use client";

import React, { useEffect, useState } from "react";

import { client } from "../utils/shopify-client";

const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.checkout_id) {
      fetchCheckout(sessionStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  const openCart = () => {
    setIsCartOpen(true)
    console.log("opening cart")
  };

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    console.log("creating new checkout");
    sessionStorage.setItem("checkout_id", checkout.id);
    setCheckout(checkout);
  };

  const fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      console.log("existing checkout. fetching...");
      setCheckout(checkout);
    });
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .addLineItems(checkout.id, lineItemToAdd)
      .then((checkout) => {
        setCheckout(checkout);
        console.log("item added", checkout);
        // openCart();
      });
  };

  const removeItemFromCheckout = async (checkoutId, variantId) => {
    client.checkout
      .removeLineItems(checkoutId, variantId)
      .then((checkout) => {
        console.log("item removed");
        setCheckout(checkout);
        console.log(checkout.lineItems);
      });
  };

  return (
    <ShopContext.Provider
      value={{
        checkout,
        addItemToCheckout,
        removeItemFromCheckout,
        isCartOpen, setIsCartOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopProvider;