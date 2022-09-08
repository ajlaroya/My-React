import React from "react";

const Landing = () => (
  <section className="">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="svg absolute lg:block -z-10 overflow-hidden"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="hsl(340.8, 58.14%, 91.57%)" offset="0%"></stop>
          <stop stopColor="hsl(0, 0%, 100%)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
      ></path>
    </svg>

    <div className="lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 sm:gap-12 items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              Welcome to <br />
              <span className="text-pink-500">arvoblooms 🌺</span>
            </h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl leading-loose">
              🌷 fun flower stuff coming soon <br />
              🌼 exclusively west melbourne <br />
              🌻 created on bunurong land <br />
              🏵️ hello@arvoblooms.com.au <br />
            </p>
            <div className="flex-row">
              <div className="relative mb-6 flex mx-auto">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border w-[75%] mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex pl-10 p-2.5"
                  placeholder="Enter email for further announcements"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3 bg-pink-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="container mx-auto">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap m-20">
                  <div className="w-1/2 p-1">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems-Pink.jpg"
                    />
                  </div>
                  <div className="w-1/2 p-1">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems.jpg"
                    />
                  </div>
                  <div className="w-full p-1">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://camberwellflorist.com/wp-content/uploads/2022/05/Phalaenopsis-Orchid-Stems-White.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
