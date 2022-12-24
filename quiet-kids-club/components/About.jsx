export default function About() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Decorative image/video and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-center object-cover"
          >
            <source src="/assets/film.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="relative flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-extrabold text-white lg:text-6xl">
            Coming soon
          </h1>
          <p className="text-white mt-2">apparel for the introvert</p>
        </div>
      </div>
    </>
  );
}
