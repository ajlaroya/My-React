import React from "react";
import Image from "next/future/image";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Featured flowers
          </h2>
          <a
            href="/shop"
            className="hidden text-sm font-medium text-zinc-800 hover-underline-animation md:block"
          >
            Shop all<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                <Image
                  width={200}
                  height={200}
                  src={product.images[0].src}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-80 hover:scale-110 ease-in duration-150"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-zinc-800 font-semibold hover-underline-animation">
                    <a href={`/product/${product.handle}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">
                    {product.productType}
                  </p> */}
                </div>
                <p className="text-sm font-medium text-zinc-800">
                  $
                  {Intl.NumberFormat("en-AU").format(product.variants[0].price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
