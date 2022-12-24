import Image from "next/image";
import leftPic from "../public/assets/16.jpg";
import rightPic from "../public/assets/17.jpg";
import dualPic from "../public/assets/19.jpg";

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
          <Image className="object-cover lg:aspect-square" src={leftPic} alt="" width={1500} height={1500} priority/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 left-1 uppercase underline">
              <a href="">INTROVERT</a>
            </h3>
          </div>
        </div>
        <div className="item lg:w-1/2 w-auto max-h-screen">
          <Image className="object-cover lg:aspect-square" src={rightPic} alt="" width={1500} height={1500} priority/>
          <div className="relative">
            <h3 className="absolute text-sm font-black text-neutral-50 bottom-6 right-1 uppercase underline">
            <a href="">SHOP NOW</a>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-auto min-h-screen">
        <Image className="object-cover" src={dualPic} alt="" width={1500} height={1500} />
      </div>
    </div>
  );
}
