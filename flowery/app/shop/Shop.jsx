'use client'

import { Fragment, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";

const sortOptions = [
  // { name: "Most Popular", value: "popular" },
  // { name: "Best Rating", value: "rating" },
  { name: "Newest", value: "dateAscending" },
  { name: "Oldest", value: "dateDescending" },
  { name: "Price: Low to High", value: "numAscending" },
  { name: "Price: High to Low", value: "numDescending" },
];
const filters = [
  // {
  //   id: "category",
  //   name: "Category",
  //   options: [
  //     { value: "flowers", label: "Flower" },
  //     { value: "vase", label: "Vase" },
  //   ],
  // },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "pink", label: "Pink" },
      { value: "grey", label: "Grey" },
      { value: "blue", label: "Blue" },
      { value: "olive", label: "Olive" },
      { value: "orange", label: "Orange" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop({ products }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortState, setSortState] = useState("dateAscending");

  const sortMethods = {
    none: products,
    // sort by String property ASCENDING (A - Z)
    // strAscending: [...products].sort((a, b) => (a.title > b.title ? 1 : -1)),

    // sort by String property DESCENDING (Z - A)
    // strDescending: [...products].sort((a, b) => (a.title > b.title ? -1 : 1)),

    // sort by Numbers property ASCENDING (low - high)
    numAscending: [...products].sort(
      (a, b) => a.variants[0].price.amount - b.variants[0].price.amount
    ),

    // sort by Numbers property DESCENDING (high - low)
    numDescending: [...products].sort(
      (a, b) => b.variants[0].price.amount - a.variants[0].price.amount
    ),

    // sort by Date property DESCENDING (old - new)
    dateDescending: [...products].sort((a, b) =>
      a.publishedAt < b.publishedAt ? -1 : a.publishedAt > b.publishedAt ? 1 : 0
    ),

    // sort by Date property ASCENDING (new - old)
    dateAscending: [...products].sort((a, b) =>
      b.publishedAt < a.publishedAt ? -1 : a.publishedAt > b.publishedAt ? 1 : 0
    ),
  };

  return (
    <>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 sm:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-zinc-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-zinc-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-zinc-400">
                              <span className="font-medium text-zinc-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-zinc-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-zinc-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-24">
            {/* <div className="pt-32 py-24 text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">
                Shop all
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-500">
                Let us bring to you the gift and beauty of flowers.
              </p>
            </div> */}

            {/* Filters */}
            <section
              aria-labelledby="filter-heading"
              className=" border-zinc-200"
            >
              <h2 id="filter-heading" className="sr-only">
                Product filters
              </h2>

              <div className="flex items-center justify-between">
                <Menu as="div" className="relative z-10 inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-zinc-700 hover:text-zinc-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-zinc-400 group-hover:text-zinc-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute left-0 z-10 mt-2 w-48 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option, index) => (
                          <Menu.Item key={index} as="Fragment">
                            <button
                              className={
                                "block px-4 py-2 text-sm font-medium text-zinc-900"
                              }
                              value={option.value}
                              onClick={(e) => setSortState(e.target.value)}
                            >
                              {option.name}
                              {sortState === option.value ? (
                                <CheckIcon className="inline-block ml-2 pb-1 h-5 w-5 text-zinc-600" />
                              ) : (
                                ""
                              )}
                            </button>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="inline-block text-sm font-medium text-zinc-700 hover:text-zinc-900 sm:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>

                <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                  {filters.map((section, sectionIdx) => (
                    <Popover
                      as="div"
                      key={section.name}
                      id="menu"
                      className="relative z-10 inline-block text-left"
                    >
                      <div>
                        <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-zinc-700 hover:text-zinc-900">
                          <span>{section.name}</span>
                          {sectionIdx === 0 ? (
                            <span className="ml-1.5 rounded py-0.5 px-1.5 bg-zinc-200 text-xs font-semibold text-zinc-700 tabular-nums">
                              0
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-zinc-400 group-hover:text-zinc-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  type="checkbox"
                                  className="h-4 w-4 border-zinc-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 pr-6 text-sm font-medium text-zinc-900 whitespace-nowrap"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </section>

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="my-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {sortMethods[sortState].map((product) => (
                  <a
                    key={product.id}
                    href={`/flowers/${product.handle}`}
                    className="group"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 rounded overflow-hidden sm:aspect-w-2 sm:aspect-h-2">
                      <Image
                        src={product.images[0].src}
                        alt={product.title}
                        className="w-full h-full object-center object-cover group-hover:opacity-80 hover:scale-110 ease-in duration-150"
                        width={300}
                        height={300}
                        priority="true"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-zinc-900">
                      <h3 className="font-semibold tracking-tight hover-underline-animation">
                        {product.title}
                      </h3>
                      <p>
                        $
                        {Intl.NumberFormat("en-AU").format(
                          product.variants[0].price.amount
                        )}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Featured section */}
            {/* <section
              aria-labelledby="featured-heading"
              className="relative my-16 rounded-lg overflow-hidden lg:h-96"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1550851439-d2ee0ab7997c"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative w-full h-96 lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative w-full h-32 lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                <div>
                  <h2
                    id="featured-heading"
                    className="text-xl font-bold text-white"
                  >
                    eGift card (from $10)
                  </h2>
                  <p className="mt-1 text-sm text-zinc-300">
                    Purchase a gift card for your friends and family!
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                >
                  Add to cart
                </a>
              </div>
            </section> */}
          </div>
        </main>
      </div>
    </>
  );
}
