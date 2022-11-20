"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function ProductFeature({ products }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const { title, descriptionHtml } = products[0];
  const { images } = products[0];

  return (
    <div className="bg-white relative z-20">
      <div className="max-w-2xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="border-b pb-10">
              <h2 className="font-medium text-neutral-400">
                Elegant simplicity
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-700 sm:text-4xl">
                {title}
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              <div
                className="text-lg font-medium antialiased text-neutral-700 leading-10"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </dl>
          </div>

          <div>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="aspect-w-1 aspect-h-1 rounded-sm bg-gray-100 overflow-hidden"
            >
              <Image
                src={images[0].src}
                alt=""
                className="w-full h-full object-center object-cover"
                width="1000" height="1000"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <div
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="aspect-w-1 aspect-h-1 rounded-sm bg-gray-100 overflow-hidden"
              >
                <Image
                  src={images[1].src}
                  alt=""
                  className="w-full h-full object-center object-cover"
                  width="1000" height="1000"
                />
              </div>
              <div
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="aspect-w-1 aspect-h-1 rounded-sm bg-gray-100 overflow-hidden"
              >
                <Image
                  src={images[2].src}
                  alt=""
                  className="w-full h-full object-center object-cover"
                  width="1000" height="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
