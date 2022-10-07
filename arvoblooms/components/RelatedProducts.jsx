import Image from "next/future/image";

export default function RelatedProducts({
  addItemToCheckout,
  openCart,
  collection,
}) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl border-t mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">You might also like</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {collection[0]?.products?.map((product) => (
            <div key={product.id}>
              <div className="group relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-gray-200 transition ease-in-out delay-50 group-hover:opacity-75">
                  <Image
                    src={product.images[0].src}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <a href={`/product/${product.handle}`}>
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.title}
                    </h3>
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.productType}
                  </p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    $
                    {Intl.NumberFormat("en-AU").format(
                      product.variants[0].price
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="w-full relative flex bg-neutral-800 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-200 hover:bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();
                    addItemToCheckout(product.variants[0].id, 1);
                    openCart();
                  }}
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
