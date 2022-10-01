import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    question: "How far in advance do I need to order for delivery?",
    answer:
      "Flowers Vasette offer same-day delivery for any orders placed before 12pm. Alternatively, if you would like your flowers to be delivered before 12pm, the order must be placed by close of business the day prior, at the latest. We are also happy to take any orders as far in advance as you wish. Simply order your flowers online or through contacting our team on +61 3 9419 4988 and we will be sure to organise beautiful blooms to be delivered anywhere across Melbourne.",
  },
  {
    question:
      "Are there times during the year that flowers are more expensive?",
    answer:
      "Working with a natural, seasonal product does see flower prices vary throughout the year. Whilst flower prices are ultimately a sum of supply and demand, Flowers Vasette remain committed to maintaining the highest quality florals at a very reasonable price. Our team are always available for contact via telephone at +61 3 9419 4988 to discuss floral needs and prices with you.",
  },
  {
    question: "Do you have Wedding/Celebration packages?",
    answer:
      "We have specialist in-house event stylists who offer years of experience in wedding and event florals. Flowers Vasette offer bespoke floral arrangements and installations for all of our clients, whatever the size of your event. Through an initial consultation with one of our specialist stylists, Flowers Vasette will then work with you to organise the highest-quality florals for your wedding or celebration party. Contact our team on +61 3 9419 4988 to begin your planning process.",
  },
  {
    question: "What if the flowers I want are not in season?",
    answer:
      "Flowers Vasette offer a vast range of flowers, both local and imported. Our flowers can be arranged for same day delivery, whilst also being planned well in advance. Due to the nature of flower markets and the weather conditions, the seasonal varieties that we work with cannot always be certain. If you have a specific floral request, your safest option is to contact our team on +61 3 9419 4988 and they can consult with you accordingly. The beauty of Mother Nature is her expansive offerings, meaning there are always incredible floral alternatives on offer (that sometimes come when we least expect it).",
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We love connections at Flowery Studio, please contact our{" "}
              <a
                href="#"
                className="font-medium text-pink-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              if you have any questions; in the interim we have included some
              FAQs below.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
