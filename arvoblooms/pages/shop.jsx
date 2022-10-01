import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default function Shop({ products }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products?.map((product) => (
            <a key={product.id} href={`/product/${product.handle}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={product.images[0].src}
                  alt={product.title}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.title}</h3>
                <p>
                    ${Intl.NumberFormat("en-AU").format(product.variants[0].price)}
                </p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.productType}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
