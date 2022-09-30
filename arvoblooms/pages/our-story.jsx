import { useRouter } from 'next/router'

const features = [
  {
    name: "Who we are",
    description:
      "Established in 20222, flowery studio is Australia’s leading floral destination – proudly and passionately working with everything from a single cut flower, through to the creation of unforgettable masterpieces.",
    imageSrc: "https://images.unsplash.com/photo-1622658641558-1bf6a846adeb",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Founder and visionary",
    description:
      "On the peaceful, suburbs of Point Cook, at the heart of Melbourne’s bohemian identity, Joy Laroya saw an opportunity. From the doors of her parents’ greengrocer, Joy opened her first flower stall making high-quality, fresh-cut flowers accessible and available to everyone.",
    imageSrc:
      "https://images.unsplash.com/photo-1598061437788-ebbfc3257ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Story() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-14 px-4 sm:px-6 sm:py-12 pb-10 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-gray-500">
            Discover flowery and our journey, delivering curated designs and
            creating magical memories.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
