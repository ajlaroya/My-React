import { useRef, useState, useEffect } from "react";
import ScrollDown from "./ScrollDown";

export default function ComingSoon() {
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

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
    <>
      <div className="relative bg-zinc-100 min-h-screen">
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
            We are coming soon
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
                className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-zinc-900 placeholder-zinc-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                name="subscribe"
                className="transition ease-in-out duration-500 block w-full rounded-md border px-5 py-3 text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800 shadow sm:px-10"
              >
                Notify me
              </button>
            </div>

            
          </form>

          {/* Subscribed text */}
          {subscribed && (
              <div className="sm:text-center">
                <p className="mt-6 mx-auto max-w-2xl text-md text-zinc-50">
                  You have successfully subscribed!
                </p>
              </div>
            )}
          
          <ScrollDown bottomRef={bottomRef}/>
        </div>
      </div>
      <div ref={bottomRef} />
    </>
  );
}
