import { useRouter } from "next/router";
import { Fragment, useState, useContext } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import Cart from './Cart'
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
          imageAlt:
            "bouquet in hand",
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
};

export default function Navbar() {
  const router = useRouter();
  const activeLink = router.pathname;
  const [open, setOpen] = useState(false);
  const { checkout, isCartOpen, setIsCartOpen } = useContext(ShopContext);

  const handleToggle = () => {
    setIsCartOpen(prev => !prev)
  };

  return (
    <>
      <Cart isCartOpen={isCartOpen} handleToggle={handleToggle} />
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-50 lg:hidden"
          onClose={setOpen}
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
            <Dialog.Overlay className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
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

              {/* Links */}
              {/* <Tab.Group as="div" className="mt-2">
                <div className="border-b border-zinc-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-pink-600 border-pink-600"
                              : "text-zinc-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      {category.sections.map((column, columnIdx) => (
                        <div key={columnIdx} className="space-y-10">
                          {column.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-zinc-900"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-2 p-2 block text-zinc-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group> */}

              <div className="border-t border-zinc-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
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
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-zinc-50">
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

                {/* <a
                  href="#"
                  className="ml-2 p-2 text-zinc-100 hover:text-zinc-200"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </a> */}
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
              <Link href="/" className="flex">
                <span className="font-bold tracking-tight cursor-pointer text-zinc-50 text-lg md:text-xl">
                  🌺 flowery
                </span>
              </Link>

              <div className="flex-1 flex items-center justify-end">
                {/* Search */}
                {/* <a
                  href="#"
                  className="hidden ml-6 p-2 text-zinc-100 hover:text-zinc-300 lg:block"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </a> */}

                {/* Account */}
                <a
                  href="my-account"
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
