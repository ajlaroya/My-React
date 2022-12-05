import Link from "next/link";

export default function ProductList({ products }) {
  function convert(color) {
    var colours = {
      "obsidian": "#2E293A",
      "black": "#000000",
      "sky blue": "#87CEEB",
      "blush pink": "#FE828C",
      "cloudy grey": "#B8BEC3",
      "agave": "#7a9a9b",
      "carbon grey": "#767873",
      "vintage gold": "#B0903D",
      "white": "#FFFFF",
      "indigo": "#202A44"
    };

    if (typeof colours[color.toLowerCase()] != "undefined")
      return colours[color.toLowerCase()];
    return false;
  }

  return (
    <div id="div_id" className="bg-neutral-50 relative z-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            QKC COZY '22 COLLECTION
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-96 rounded overflow-hidden group-hover:brightness-125 ease-in-out duration-300 sm:h-auto sm:aspect-w-2 sm:aspect-h-3 cursor-pointer">
                <img
                  src={product.images[0].src}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:scale-110 ease-in-out duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-neutral-900">
                <Link href={`products/${product.handle}`}>
                  <span className="absolute inset-0" />
                  {product.title}
                </Link>
              </h3>
              <p className="mt-1 text-lg text-neutral-700">
                $
                {Intl.NumberFormat("en-AU").format(
                  product.variants[0].price.amount
                )}
              </p>

              <h4 className="sr-only">Available colors</h4>
              <ul
                role="list"
                className="mt-auto pt-6 flex items-center justify-center space-x-3"
              >
                {product.options[0].values.map((color) => (
                  <li
                    key={color.value}
                    className="w-4 h-4 rounded-full border border-black border-opacity-10"
                    style={{ backgroundColor: convert(color.value) }}
                  >
                    <span className="sr-only">{color.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
