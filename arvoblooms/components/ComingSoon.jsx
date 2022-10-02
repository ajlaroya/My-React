import { useRef, useState, useEffect } from "react";

export default function Example() {
  const inputRef = useRef(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setSubscribed(false);
  }, []);

  // Subscribe user to mailchimps mailing
  const subscribeUser = async (e) => {
    e.preventDefault();

    // mailchimp request

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });

    setSubscribed(true);
  };

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 min-h-screen">
        {/* Decorative image/video and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-center object-cover"
          >
            <source src="/assets/blooms.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            We are coming soon 🌸
          </h1>
          <p className="mt-4 text-xl text-white">
            We are almost there! If you want to get notified when the website
            goes live, subscribe to our mailing list!
          </p>
          {/* Subscribe form */}
          <form
            onSubmit={subscribeUser}
            className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                ref={inputRef}
                required
                autoCapitalize="off"
                autoCorrect="off"
                className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                value=""
                name="subscribe"
                className="block w-full rounded-md border border-transparent px-5 py-3 bg-pink-400 text-base font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-600 sm:px-10"
              >
                Notify me
              </button>
            </div>
          </form>

          {subscribed && (
            <div className="sm:text-center">
              <p className="mt-6 mx-auto max-w-2xl text-md text-pink-100">
                You have successfully subscribed!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
