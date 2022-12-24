"use client";

import { Fragment, useState, useContext } from "react";
import Image from "next/image";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { Jost } from "@next/font/google";
import Dropdown from "./Dropdown";

import { ShopContext } from "../context/shopContext";

const jost = Jost({ subsets: ["latin"] });

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  const { addItemToCheckout } = useContext(ShopContext);

  function convert(color) {
    var colours = {
      obsidian: "#2E293A",
      black: "#000000",
      "sky blue": "#87CEEB",
      "blush pink": "#FE828C",
      "cloudy grey": "#B8BEC3",
      agave: "#7a9a9b",
      "carbon grey": "#767873",
      "vintage gold": "#B0903D",
      white: "#FFFFF",
      indigo: "#202A44",
    };

    if (typeof colours[color.toLowerCase()] != "undefined")
      return colours[color.toLowerCase()];
    return false;
  }

  const initialProduct = {
    id: product.variants[0].id,
    title: product.variants[0].title,
    colour: product.variants[0].selectedOptions[0].value,
    size: product.variants[0].selectedOptions[1]?.value,
    price: product.variants[0].price.amount,
    image: product.variants[0].image.src,
  };

  const [activeProduct, setActiveProduct] = useState(initialProduct);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-neutral-50 pt-12">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <a
                  href="/"
                  className="mr-4 text-base font-medium text-gray-900"
                >
                  QKC COZY '22
                </a>
                <svg
                  viewBox="0 0 6 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
            <li className="text-base uppercase">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-3xl uppercase font-black tracking-tight text-neutral-900">
                  {product.title}
                </h1>
                <p className="text-2xl font-black text-gray-900">
                  {Intl.NumberFormat("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  }).format(activeProduct.price)}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images
                  .filter((color) =>
                    color.altText?.includes(activeProduct.colour.toLowerCase())
                  )
                  .map((image) => (
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.altText}
                      width={681}
                      height={681}
                      className={classNames(
                        image.altText.includes("primary")
                          ? "lg:col-span-2 lg:row-span-2"
                          : "hidden lg:block",
                        "rounded-lg"
                        
                      )}
                    />
                  ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Option</h2>
                  <Dropdown
                    product={product}
                    activeProduct={activeProduct}
                    setActiveProduct={setActiveProduct}
                  />
                </div>

                {/* Color picker */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900">Colour</h2>
                  <span>{activeProduct.colour}</span>
                  <RadioGroup value={activeProduct.colour} className="mt-2">
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.options[0].values.map((color) => (
                        <RadioGroup.Option
                          key={color.value}
                          value={color.value}
                          className={({ active, checked }) =>
                            classNames(
                              "ring-neutral-400",
                              active && checked ? "ring-1 ring-offset-0" : "",
                              !active && checked ? "ring-1" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label
                            as="p"
                            className="sr-only"
                          ></RadioGroup.Label>
                          <span
                            className={classNames(
                              "bg-" + convert(color.value),
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                            style={{ backgroundColor: convert(color.value) }}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Size</h2>
                  </div>

                  <RadioGroup value={activeProduct.size} className="mt-2">
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.options[1]?.values?.map((size) => (
                        <RadioGroup.Option
                          key={size.value}
                          value={size.value}
                          className={({ active, checked }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer focus:outline-none"
                                : "cursor-pointer focus:outline-none",
                              active
                                ? "ring-2 ring-offset-2 ring-neutral-500"
                                : "",
                              checked
                                ? "bg-neutral-900 border-transparent text-white hover:bg-neutral-700"
                                : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                              "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 mb-3"
                            )
                          }
                          //   disabled={!size.inStock}
                        >
                          <RadioGroup.Label as="p">
                            {size.value}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-neutral-900 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-700"
                  onClick={(e) => {
                    e.preventDefault();
                    addItemToCheckout(activeProduct.id, 1);
                    openModal();
                  }}
                >
                  Add to cart
                </button>

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-bold leading-6 text-gray-900"
                            >
                              {product.title} added to cart!
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-base text-gray-500">
                                Your product has been successfully added to cart.
                                Click on your shopping bag to see details of your order.
                              </p>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-neutral-100 px-4 py-2 text-base font-medium text-neutral-900 hover:bg-neutral-200 transition"
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900">Description</h2>
                <div
                  className={`mt-4 text-gray-700 ${jost.className}`}
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
