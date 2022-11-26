"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";

const policies = [
  {
    name: "International delivery",
    icon: GlobeAsiaAustraliaIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  function convert(color) {
    var colours = {
      obsidian: "[#2E293A]",
      black: "[#000000]",
      "sky blue": "[#87CEEB]",
      "blush pink": "[#FE828C]",
      "cloudy gray": "[#B8BEC3]",
      agave: "[#7a9a9b]",
      "carbon grey": "[#767873]",
      "vintage gold": "[#B0903D]",
      white: "[#FFFFF]",
    };

    if (typeof colours[color.toLowerCase()] != "undefined")
      return colours[color.toLowerCase()];
    return false;
  }

  const [selectedColor, setSelectedColor] = useState(
    product.options[0].values[0].value
  );
  const [selectedSize, setSelectedSize] = useState(
    product.options[1].values[0].value
  );

  return (
    <div className="bg-white pt-12">
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
                <h1 className="text-2xl font-black tracking-tight text-neutral-900">
                  {product.title}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {Intl.NumberFormat("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  }).format(product.variants[0].price.amount)}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.slice(0, 5).map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.altText}
                    className={classNames(
                      image.hasPreviousPage == false
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
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  {/*'ring-'+convert(color.value) */}
                  <RadioGroup
                    value={selectedColor}
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
                            aria-hidden="true"
                            className={classNames(
                              "bg-" + convert(color.value),
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See sizing chart
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.options[1].values.map((size) => (
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
                              "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
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
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-lg font-bold text-gray-900">
                  Description
                </h2>

                <div
                  className="mt-4 tracking-wide text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                {/* <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2> */}

                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {/* {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))} */}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
