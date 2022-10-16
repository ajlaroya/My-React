export default function About() {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-20 min-h-screen lg:px-16 mb-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520876951662-fa468ed215e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-800 bg-opacity-30"
      />
      <div className="absolute top-10 left-10 md:top-20 md:left-20 flex flex-col">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Our story
        </h2>
        <p className="mt-3 md:text-xl text-white w-[70%] md:w-[40%]">
          For the flower aficionado, the local shopper; for celebrations to
          deepest condolences; to envision, inspire and create extraordinary
          moments – we are Flowery Studio.
        </p>
      </div>

      <a
        href="/our-story"
        className="transition ease-in-out duration-500 absolute bottom-10 right-10 md:bottom-20 md:right-20 block border rounded-md py-3 px-8 text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800 sm:w-auto w-auto"
      >
        Read our story
      </a>
    </div>
  );
}
