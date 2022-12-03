"use client";

import { useState, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import { Jost } from "@next/font/google";
import Dropdown from "./Dropdown";

import { ShopContext } from "../context/shopContext";

const jost = Jost({ subsets: ["latin"] });

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  console.log(product);
  const { checkout, addItemToCheckout } = useContext(ShopContext);

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
  const [selectedColor, setSelectedColor] = useState(
    product.options[0].values[0].value
  );
  const [selectedSize, setSelectedSize] = useState(
    product.options[1]?.values[0]?.value
  );

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
                <a href="/" className="mr-4 text-sm font-medium text-gray-900">
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
            <li className="text-sm">
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
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.altText}
                      className={classNames(
                        image.altText.includes("primary")
                          ? "lg:col-span-2 lg:row-span-2"
                          : "hidden lg:block",
                        "rounded-lg"
                      )}
                    />
                  ))}
                {/* <img
                  src={activeProduct.image}
                  className="lg:col-span-2 lg:row-span-2 lg:block rounded-lg"
                /> */}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <div>
                <h2 className="text-lg font-bold text-gray-900">Option</h2>
                <Dropdown
                  product={product}
                  activeProduct={activeProduct}
                  setActiveProduct={setActiveProduct}
                />
                </div>

                {/* Color picker */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900">Colour</h2>
                  <span>{activeProduct.colour}</span>
                  <RadioGroup
                    value={activeProduct.colour}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
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
                    <h2 className="text-lg font-bold text-gray-900">Size</h2>
                  </div>

                  <RadioGroup
                    value={activeProduct.size}
                    onChange={setSelectedSize}
                    className="mt-2"
                  >
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
                  className="mt-8 w-full bg-neutral-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.preventDefault();
                    addItemToCheckout(activeProduct.id, 1);
                  }}
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-lg font-bold text-gray-900">Description</h2>
                <div
                  className={`mt-4 text-gray-700 text-sm ${jost.className}`}
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
