import React, { Fragment, useContext } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import { ShopContext } from "../context/shopContext";

const Cart = () => {
  const { checkout, removeItemFromCheckout, isCartOpen, setIsCartOpen } =
    useContext(ShopContext);

  const handleToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <div className="ml-4 flow-root lg:ml-6">
        <button
          onClick={() => handleToggle()}
          className="group -m-2 p-2 flex items-center"
        >
          <ShoppingBagIcon
            className="flex-shrink-0 h-5 w-5 text-neutral-100 group-hover:text-neutral-300"
            aria-hidden="true"
          />
          {checkout?.lineItems?.length > 0 && (
            <span className="ml-2 text-sm font-medium text-neutral-100 group-hover:text-neutral-200">
              {checkout?.lineItems?.length}
            </span>
          )}
          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>
      <Transition show={isCartOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={handleToggle}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                {/* Shopping Cart Panel */}
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll backdrop-blur-sm bg-black/50">
                    {/* Shopping Cart Title */}
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-200">
                          {" "}
                          Shopping cart{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-neutral-400 hover:text-neutral-500"
                            onClick={() => handleToggle()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Shopping Cart Products */}
                      <div className="mt-8">
                        <div className="flow-root">
                          {/* if no items in cart */}
                          {checkout?.lineItems?.length === 0 && (
                            <span className="ml-2 text-lg font-medium text-neutral-100">
                              You have no items in cart!
                            </span>
                          )}

                          <ul
                            role="list"
                            className="-my-6 divide-y divide-neutral-500"
                          >
                            {checkout.lineItems &&
                              checkout.lineItems.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                                    <Image
                                      src={item.variant.image.src}
                                      alt={item.title}
                                      width={100}
                                      height={100}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-200">
                                        <h3>
                                          <a href={item.href}> {item.title} </a>
                                        </h3>
                                        <p className="ml-4">
                                          $
                                          {Intl.NumberFormat("en-AU").format(
                                            item.variant.price.amount
                                          )}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-neutral-500">
                                        {item.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-neutral-300">
                                        Qty {item.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-neutral-300 hover:text-neutral-500"
                                          onClick={() => {
                                            removeItemFromCheckout(
                                              checkout.id,
                                              item.id
                                            );
                                          }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Shopping Cart Info / Button */}
                    <div className="border-t border-neutral-500 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-lg font-medium text-gray-200">
                        <p>Subtotal</p>
                        {checkout.lineItems && (
                          <p>
                            $
                            {Intl.NumberFormat("en-AU").format(
                              checkout.lineItemsSubtotalPrice.amount
                            )}
                          </p>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-neutral-300">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        {/* If cart is empty disable button */}
                        {checkout?.lineItems?.length > 0 ? (
                          <a
                            href={checkout.webUrl}
                            className="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-neutral-700"
                          >
                            Checkout
                          </a>
                        ) : (
                          <a
                            passhref="true"
                            className="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm opacity-50"
                          >
                            Checkout
                          </a>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-neutral-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-neutral-200 hover:text-neutral-300"
                            onClick={() => handleToggle()}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Cart;
