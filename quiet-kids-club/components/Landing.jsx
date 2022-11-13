export default function Landing() {
  return (
    <div className="relative bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        <div class="item w-auto h-screen">
          <img className="object-cover" src="/assets/shop-man-d.jpg" alt="" />
        </div>
        <div class="item w-auto h-screen">
          <img className="object-cover" src="/assets/shop-woman-d.jpg" alt="" />
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl text-neutral-50 font-black tracking-tight text-center -z-10">Quiet Kids Club</h1>
        </div>
      </div>
      <div class="w-auto">
          <img className="object-cover" src="/assets/rosalia-d.jpg" alt="" />
        </div>
    </div>
  );
}
