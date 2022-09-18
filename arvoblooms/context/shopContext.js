import React, { useEffect, useState } from "react";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";
const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  const createCheckout = async () => {
    const checkout = await shopifyClient.checkout.create();
    console.log("creating new checkout")
    localStorage.setItem("checkout_id", checkout.id);
    setCheckout(checkout);
  };

  const fetchCheckout = async (checkoutId) => {
    shopifyClient.checkout.fetch(checkoutId).then((checkout) => {
      console.log("existing checkout. fetching...")
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

    const newCheckout = await shopifyClient.checkout.addLineItems(
      checkout.id,
      lineItemToAdd
    );

    setCheckout(newCheckout);
    console.log("added", newCheckout)
  };

  const closeCart = () => {
    setIsCartOpen(false)
    console.log("closing cart")
  };

  const openCart = () => {
    setIsCartOpen(true)
    console.log("opening cart")
  };

  return (
    <ShopContext.Provider
        value={{
            checkout,
            isCartOpen,
            closeCart,
            openCart,
            addItemToCheckout,
        }}
    >
        {children}
    </ShopContext.Provider>
  );
};

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
