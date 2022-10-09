import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const shops = [
  {
    id: 1,
    city: "Australia",
    address: ["XX Devoe Road", "Melbourne, VIC 3030"],
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      {/* Photo bg cover */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1582815464803-2ade81b7d494"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />
      </div>

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-50">
          <div className="pt-24 pb-12 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">
                Get in touch
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-3xl">
                We relish the opportunity to discuss your enquiry with you.  <br />
                Please contact us via the channels below!
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className="relative bg-white pt-20"
          aria-labelledby="contact-heading"
        >
          <div className="absolute w-full h-1/2" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-zinc-50 shadow-xl rounded">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-zinc-800 sm:px-10 xl:p-12 rounded">
                  <p className="mt-3 text-base text-zinc-50 max-w-3xl">
                    If you would like to speak with a member of our team about
                    flowers, be it from our local shop or studio – please
                    contact us via the enquiry form, or should you prefer,
                    please call us on +61 X XXXX XXXX.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-zinc-50">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 text-zinc-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+61 X XXXX XXXX</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-zinc-50">
                      <EnvelopeIcon
                        className="flex-shrink-0 w-6 h-6 text-zinc-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">hello@flowerystudio.com</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a className="text-zinc-200 hover:text-zinc-100" href="#">
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-zinc-200 hover:text-zinc-100" href="#">
                        <span className="sr-only">Instagram</span>
                        <svg
                          viewBox="0 0 30 30"
                          fill="currentColor"
                          className="h-7 w-7"
                        >
                          <circle cx="15" cy="15" r="4" />
                          <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-zinc-200 hover:text-zinc-100" href="#">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-zinc-900">
                    Send us a message
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border-zinc-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border-zinc-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border-zinc-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-zinc-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-zinc-400"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border-zinc-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border-zinc-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-zinc-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-zinc-400"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-zinc-500 focus:border-zinc-500 border border-zinc-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Google Map? */}
        <div className="relative bg-zinc-800 my-20">
          <div className="h-96 sm:h-96 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="/assets/flowerymap.webp"
              alt=""
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-300">
                Come check out our local shop
              </h2>
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                Where we are located
              </p>
              <p className="mt-3 text-lg text-zinc-300">
                XX Devoe Road, Point Cook, Melbourne, VIC 3030
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
