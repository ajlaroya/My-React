export default function ProductList({ products }) {
  function convert(color) {
    var colours = {
      "obsidian": "#2E293A",
      "black": "#000000",
      "sky blue": "#87CEEB",
      "blush pink": "#FE828C",
      "cloudy gray": "#B8BEC3",
      "agave": "#7a9a9b",
      "carbon grey": "#767873",
      "vintage gold": "#B0903D",
      "white": "#FFFFF",
    };

    if (typeof colours[color.toLowerCase()] != "undefined")
      return colours[color.toLowerCase()];
    return false;
  }

  return (
    <div className="bg-white relative z-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight italic text-gray-900">
            QKC COZY '22 SEASON
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative cursor-pointer">
              <div className="w-full h-96 rounded overflow-hidden group-hover:opacity-80 ease-in-out duration-500 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={product.images[0].src}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:scale-125 ease-in-out duration-500"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-neutral-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-lg text-neutral-700">
                ${Intl.NumberFormat('en-AU').format(product.variants[0].price.amount)}
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

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
