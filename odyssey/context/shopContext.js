import React, { useState, useEffect } from 'react'
import { shopifyClient, parseShopifyResponse} from '../lib/shopify'
const ShopContext = React.createContext();

const ShopProvider = ({ checkout, children }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [checkouts, setCheckouts] = useState({checkout})
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Creates empty checkout instance when page load
  useEffect(() => {
    if (localStorage.checkout_id) {
        fetchCheckout(localStorage.checkout_id)
    } else {
        createCheckout()
    }
  }, [])

  const createCheckout = async () => {
    localStorage.setItem("checkout_id", checkout.id);
    setCheckouts(checkout)
  }

  const fetchCheckout = async (checkout) => {
    setCheckouts(checkout)
  }

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
        {
            variantId,
            quantity: parseInt(quantity, 10)
        }
    ]

    const checkout = await shopifyClient.checkout.addLineItems(
        checkout.id, lineItemToAdd
    )

    setCheckout(checkout)
    console.log("added", checkout)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  return (
    <ShopContext.Provider value={{
        closeCart, openCart, addItemToCheckout
    }}
    >
        {children}
    </ShopContext.Provider>
  )
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }
export default ShopProvider

export const getServerSideProps = async () => {
  const checkout = shopifyClient.checkout.create();
  const fetchedCheckout = shopifyClient.checkout.fetch(localStorage.checkout_id)

  return {
   props: {
    checkout,
    fetchedCheckout
  },
 };
};
