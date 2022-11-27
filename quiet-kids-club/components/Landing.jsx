import Image from "next/image";
import leftPic from "../public/assets/16.jpg";
import rightPic from "../public/assets/17.jpg";
import dualPic from "../public/assets/18.jpg";

export default function Landing() {
  return (
    <div className="relative bg-neutral-900">
      <div className="flex flex-col lg:flex-row snap-center">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl lg:text-8xl font-black tracking-tight text-center antialiased drop-shadow-2xl shadow-black text-neutral-50 ease-in-out duration-300 hover:scale-110">
            Quiet Kids Club
          </h1>
        </div>
        <div className="item lg:w-1/2 max-h-screen">
          <Image className="object-cover lg:aspect-square" src={leftPic} alt="" priority/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 left-1 uppercase">
              INTROVERT
            </h3>
          </div>
        </div>
        <div className="item lg:w-1/2 w-auto max-h-screen">
          <Image className="object-cover lg:aspect-square" src={rightPic} alt="" priority placeholder="blur"/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 right-1 uppercase">
              oh SO QUIET!
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-auto min-h-screen snap-center">
        <Image className="object-cover" src={dualPic} alt="" />
      </div>
    </div>
  );
}
