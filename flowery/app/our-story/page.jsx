import Head from "next/head";

export default function Story() {
  return (
    <>
      <Head>
        <title>Our Story | Flowery</title>
      </Head>
      {/* Screen height img card */}
      <div className="relative bg-zinc-900 py-32 px-6 sm:py-20 min-h-screen lg:px-16 mb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1592252/pexels-photo-1592252.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="sakura blossom"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-800 bg-opacity-30"
        />
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 flex flex-col">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our story
          </h2>
          <p className="mt-3 md:text-xl text-white w-[50%] md:w-[40%]">
            Melbourne&apos;s rising florist since 2022. Discover Flowery Studio and
            our journey over the decades, delivering curated designs and
            creating magical memories.
          </p>
        </div>
      </div>

      <div className="relative pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
                  Who we are
                </h2>
                <p className="mt-4 text-lg text-zinc-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum porttitor pretium faucibus. Phasellus consectetur
                  nisl varius diam blandit ultricies. Donec vel nisl ut dolor
                  finibus efficitur. Sed vulputate sem et nisl suscipit
                  vehicula. Aenean viverra purus ut felis ornare, nec interdum
                  massa euismod. Suspendisse sagittis libero massa, vel lacinia
                  erat accumsan vitae. Mauris vitae nisi turpis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Duis congue ligula at arcu dignissim
                  sagittis.
                  <br />
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded shadow-xl ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1654618708096-f2c0dba25e4e"
                  alt="florist"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Founder and visionary
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                        sed diam. Sit orci risus aenean curabitur donec aliquet.
                        Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Joy Laroya, Founder
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1531058240690-006c446962d8"
                  alt="florist visionary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
