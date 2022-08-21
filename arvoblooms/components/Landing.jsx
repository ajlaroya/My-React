import React from "react";

const Landing = () => (
  <section class="bg-white min-h-screen">
    <div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="place-self-center place-items-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Welcome to <br /> arvoblooms 🌺
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl leading-loose">
          🌷 fun flower stuff coming soon <br />
          🌼 exclusively west melbourne <br />
          🌻 created on bunurong land <br />
          🏵️ hello@arvoblooms.com.au <br />
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-400 hover:bg-pink-500"
        >
          Shop now
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Flower guide
        </a>
      </div>

      {/* images */}
      <div class="mt-5 flex lg:mt-0 lg:col-span-5 lg:flex justify-center">
        <div className="grid grid-rows-2 grid-flow-col gap-2 justify-center">
          <div className="row-span-3 col-span-2">
            <img
              src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems-Pink.jpg"
              className="h-full w-[100%] object-cover rounded-lg shadow-sm"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems.jpg"
              className="w-[75%] rounded-lg shadow-sm"
            />
          </div>
          <div className="row-span-2 col-span-2">
            <img
              src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems-White.jpg"
              className="w-[75%] rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
