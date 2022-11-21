import Image from "next/image";
import leftPic from "../public/assets/2.jpg";
import rightPic from "../public/assets/13.jpg";
import dualPic from "../public/assets/5.jpg";

export default function Landing() {
  return (
    <div className="relative bg-neutral-900">
      <div className="flex flex-col lg:flex-row">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl font-black tracking-tight text-center antialiased drop-shadow-2xl shadow-black text-neutral-50 hover:animate-pulse">
            Quiet Kids Club
          </h1>
        </div>
        <div className="item lg:w-1/2 min-h-screen max-h-screen">
          <Image className="object-cover aspect-square" src={leftPic} alt="" />
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 left-1 uppercase">
              INTRO VERT
            </h3>
          </div>
        </div>
        <div className="item lg:w-1/2 min-h-screen max-h-screen">
          <Image className="object-cover aspect-square" src={rightPic} alt="" />
          <div className="relative">
            <h3 class="absolute text-sm font-black text-neutral-50 bottom-6 right-1 uppercase">
              YOU'RE SO QUIET!
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-auto min-h-screen">
        <Image className="object-cover" src={dualPic} alt="" />
      </div>
    </div>
  );
}
