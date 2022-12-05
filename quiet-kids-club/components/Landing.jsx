import Image from "next/image";
import leftPic from "../public/assets/16.jpg";
import rightPic from "../public/assets/17.jpg";
import dualPic from "../public/assets/18.jpg";

export default function Landing() {
  return (
    <div id="home" className="relative bg-neutral-900">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-center antialiased drop-shadow-2xl shadow-black text-neutral-50 ease-in-out duration-300 hover:scale-105">
            Quiet Kids Club
          </h1>
        </div>
      <div className="flex flex-col lg:flex-row">
        <div className="item lg:w-1/2 max-h-screen ">
          <Image className="object-cover lg:aspect-square hover:grayscale transition duration-1000" src={leftPic} alt="" priority/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 left-1 uppercase">
              INTROVERT
            </h3>
          </div>
        </div>
        <div className="item lg:w-1/2 w-auto max-h-screen hover:grayscale transition duration-1000">
          <Image className="object-cover lg:aspect-square" src={rightPic} alt="" priority placeholder="blur"/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 right-1 uppercase">
              oh SO QUIET!
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-auto min-h-screen hover:grayscale transition duration-1000">
        <Image className="object-cover" src={dualPic} alt="" />
      </div>
    </div>
  );
}
