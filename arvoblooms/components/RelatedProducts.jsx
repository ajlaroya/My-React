export default function RelatedProducts({
  addItemToCheckout,
  openCart,
  collection,
}) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl border-t mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Customers also bought
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {collection[0]?.products?.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.images[0].src}
                    alt={product.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.title}
                  </h3>
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
                  className="w-full relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();
                    addItemToCheckout(product.variants[0].id, 1);
                    openCart();
                  }}
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </button>
                {/* <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
