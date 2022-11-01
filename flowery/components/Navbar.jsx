"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState, useContext } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import Cart from "./Cart";
import { ShopContext } from "../context/shopContext";

const navigation = {
  categories: [
    {
      id: "shop",
      name: "Shop",
      featured: [
        {
          name: "Flowers",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60",
          imageAlt: "bouquet in hand",
        },
      ],
      sections: [
        [
          {
            id: "flowers",
            name: "Flowers",
            items: [
              { name: "Bouquets", href: "#" },
              { name: "Arrangements", href: "#" },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/our-story" },
    { name: "FAQ", href: "/faq" },
  ],
  mobile_pages: [
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/our-story" },
    { name: "Account", href: "/my-account" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Navbar() {
  const router = useRouter();
  const activeLink = router.pathname;
  const [open, setOpen] = useState(false);
  const { checkout, isCartOpen, setIsCartOpen } = useContext(ShopContext);

  const handleToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <Cart
        isCartOpen={isCartOpen}
        handleToggle={handleToggle}
      />
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-50 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-200 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full backdrop-blur-md bg-black/50 border-r shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 py-5 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-zinc-200"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-zinc-200 py-6 px-6 space-y-6">
                {navigation.mobile_pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className={
                        activeLink == page.href
                          ? "-m-2 block font-medium underline-offset-4 underline text-zinc-50"
                          : "-m-2 block text-zinc-100 hover-underline-animation-white"
                      }
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-australia.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-zinc-100">
                    AUD
                  </span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Navbar */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-zinc-900/90">
        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-12 ">
          <div className="">
            <div className="h-16 flex items-center justify-between">
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-transparent p-2 rounded-md text-zinc-100"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className={
                        activeLink == page.href
                          ? "flex items-center text-sm font-bold text-white border-white border-b"
                          : "flex items-center text-sm font-medium text-zinc-100 hover:text-zinc-200"
                      }
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href="/" className="flex font-bold tracking-tight cursor-pointer text-white text-lg md:text-xl">
                🌺 flowery
              </Link>

              <div className="flex-1 flex items-center justify-end">
                {/* Account */}
                <a
                  href="/my-account"
                  className="p-2 text-zinc-100 hover:text-zinc-300 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon className="w-6 h-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    onClick={() => handleToggle()}
                    className="group -m-2 p-2 flex items-center"
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-zinc-100 group-hover:text-zinc-300"
                      aria-hidden="true"
                    />
                    {checkout?.lineItems?.length > 0 && (
                      <span className="ml-2 text-sm font-medium text-zinc-100 group-hover:text-zinc-200">
                        {checkout?.lineItems?.length}
                      </span>
                    )}
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}