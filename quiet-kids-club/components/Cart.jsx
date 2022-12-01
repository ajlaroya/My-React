import { Fragment, useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

import { ShopContext } from "../context/shopContext";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Cart() {
  const { checkout, removeItemFromCheckout } = useContext(ShopContext);

  return (
    <>
      <Popover className="ml-5 flow-root text-sm lg:relative">
        <Popover.Button className="group -m-2 p-2 flex items-center">
          <ShoppingBagIcon
            className="flex-shrink-0 h-5 w-5 text-neutral-50 group-hover:text-neutral-100"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-neutral-100 group-hover:text-neutral-200">
            0
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute top-full left-auto right-0 inset-x-0 mt-px pb-6 bg-neutral-900 shadow-lg sm:px-2 lg:right-0 lg:mt-4 lg:-mr-1.5 lg:w-80 rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
            <form className="max-w-2xl mx-auto px-4">
              <ul role="list" className="divide-y divide-neutral-200">
                {products.map((product) => (
                  <li key={product.id} className="py-6 flex items-center">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none w-16 h-16 rounded-md border border-neutral-200"
                    />
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-neutral-50">
                          <h3>
                            <a href={product.href}> {product.name} </a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-neutral-100">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-neutral-100">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*                               
                    <div className="ml-4 flex-auto">
                      <h3 className="font-medium text-neutral-50">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="text-neutral-200">{product.color}</p>
                    </div> */}
                  </li>
                ))}
              </ul>

              <button
                type="submit"
                className="w-full bg-neutral-100 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-neutral-500"
              >
                Checkout
              </button>

              <p className="mt-6 text-center">
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-100 hover:text-neutral-200"
                >
                  View Shopping Bag
                </a>
              </p>
            </form>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
