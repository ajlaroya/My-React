import { useContext, useEffect } from "react";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";

import { ShopContext } from "../../context/shopContext";
import { shopifyClient, parseShopifyResponse } from "../../utils/shopify";
import RelatedProducts from "../../components/RelatedProducts";

import Image from "next/future/image";
import Head from "next/head";

const breadcrumbs = {
  breadcrumbs: [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "Flowers", href: "#" },
  ],
};
const reviews = { average: 4, totalCount: 56 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ product }) {
  const { addItemToCheckout, openCart, fetchCollection, collection } =
    useContext(ShopContext);
  const { title, descriptionHtml } = product;
  const { src } = product.images[0];
  const { price } = product.variants[0];

  // Fetches collection on page load
  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Flowery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="pt-16">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {breadcrumbs.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a
                        href={breadcrumb.href}
                        className="font-medium text-gray-500 hover:text-gray-900 hover-underline-animation"
                      >
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== breadcrumbs.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              {/* Product info */}
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">${price}</p>

                <div className="ml-4 pl-4 border-l border-gray-300">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-neutral-800"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">
                      {reviews.totalCount} reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile product image*/}
              <div className="md:hidden my-5 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded overflow-hidden">
                  <Image
                    priority
                    src={src}
                    alt={title}
                    width={200}
                    height={200}
                    className="w-full h-full object-center object-cover hover:opacity-80 hover:scale-110 ease-in duration-150"
                  />
                </div>
              </div>

              {/* Product description */}
              <div
                className="mt-4 space-y-6 text-zinc-500"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />

              <div className="mt-6 flex items-center">
                <CheckIcon
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">
                  In stock and ready to ship
                </p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="hidden lg:block mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 rounded overflow-hidden">
              <Image
                priority
                src={src}
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-center object-cover hover:opacity-80 hover:scale-110 ease-in duration-150"
              />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                {/* <div className="sm:flex sm:justify-between"> */}
                {/* Size selector */}
                {/* <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                      Size
                    </RadioGroup.Label>
                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          as="div"
                          key={size.name}
                          value={size}
                          className={({ active }) =>
                            classNames(
                              active ? "ring-2 ring-neutral-500" : "",
                              "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label
                                as="p"
                                className="text-base font-medium text-gray-900"
                              >
                                {size.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="p"
                                className="mt-1 text-sm text-gray-500"
                              >
                                {size.description}
                              </RadioGroup.Description>
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-neutral-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-lg pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup> */}
                {/* </div> */}
                <div className="mb-10">
                  <button
                    className="w-full bg-neutral-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-neutral-500"
                    onClick={(e) => {
                      e.preventDefault();
                      addItemToCheckout(product.variants[0].id, 1);
                    }}
                  >
                    Add to bag
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>

      <RelatedProducts
        addItemToCheckout={addItemToCheckout}
        openCart={openCart}
        collection={collection}
      />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;

  // Fetch all the products
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product),
    },
  };
};
