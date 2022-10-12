import React, { useEffect, useState } from "react";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";
const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [collection, setCollection] = useState({})
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  const openCart = () => {
    setIsCartOpen(true)
    console.log("opening cart")
  };

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

    shopifyClient.checkout.addLineItems(checkout.id, lineItemToAdd).then((checkout) => {
      setCheckout(checkout);
      console.log("item added", checkout)
      openCart();
    })

  };

  const removeItemFromCheckout = async (checkoutId, variantId) => {
    shopifyClient.checkout.removeLineItems(checkoutId, variantId).then((checkout) => {
      console.log("item removed")
      setCheckout(checkout)
      console.log(checkout.lineItems);
    })
  }

  const fetchCollection = async () => {
    shopifyClient.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      setCollection(parseShopifyResponse(collections))
    });
  }

  return (
    <ShopContext.Provider
        value={{
            checkout,
            collection,
            isCartOpen,
            setIsCartOpen,
            openCart,
            addItemToCheckout,
            removeItemFromCheckout,
            fetchCollection,
        }}
    >
        {children}
    </ShopContext.Provider>
  );
};

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
