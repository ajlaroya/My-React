import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-pink-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Your little local florist 🌸</span>
            <span className="block text-pink-500">Coming soon!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-500 px-5 py-3 text-base font-medium text-white hover:bg-pink-600"
              >
                Sign up
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-pink-600 hover:bg-pink-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  