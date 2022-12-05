"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Cart from "./Cart";

const navigation = {
  pages: [
    { name: "QKC COZY 22", href: "/#div_id" },
    { name: "ABOUT", href: "#" },
  ],
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather neutral t-shirt.',
        },
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full">
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
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
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
            <div className="relative max-w-xs w-full bg-neutral-900 shadow-xl pb-12 flex flex-col overflow-y-scroll">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-neutral-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-neutral-100 border-neutral-600' : 'text-neutral-50 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
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
                    <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-neutral-100 overflow-hidden group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                            </div>
                            <a href={item.href} className="mt-6 block text-sm font-medium text-neutral-100">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1 text-sm text-neutral-100">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-neutral-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-black text-sm text-neutral-50"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative bg-neutral-900">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0"
        >
          <div className="h-12 flex items-center justify-between">
            <div className="flex-1 flex items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 p-2 rounded-md text-neutral-50"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              </button>

              <a
                href="#"
                className="ml-2 p-2 text-neutral-50 hover:text-neutral-500"
              >
                <span className="sr-only">Search</span>
                <HeartIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-md font-black text-neutral-50 hover:text-neutral-200"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            {/* Logo */}
            <a href="/#home" className="flex">
              <span className="font-black text-xl text-neutral-50 tracking-tight">
                QKC
              </span>
            </a>

            <div className="flex-1 flex items-center justify-end">
              {/* Like */}
              <a
                href="#"
                className="hidden p-2 text-neutral-50 hover:text-neutral-50 lg:block"
              >
                <span className="sr-only">Likes</span>
                <HeartIcon className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Account */}
              <a
                href="#"
                className="text-neutral-50 hover:text-neutral-50 lg:ml-4"
              >
                <span className="sr-only">Account</span>
                <UserIcon className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Cart */}
             <Cart />
              
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
