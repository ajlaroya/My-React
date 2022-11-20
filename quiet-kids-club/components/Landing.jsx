import Image from 'next/image'
import leftPic from '../public/assets/1.jpg'
import rightPic from '../public/assets/2.jpg'
import dualPic from '../public/assets/3.jpg'

export default function Landing() {
  return (
    <div className="relative bg-neutral-900">
      <div className="flex flex-col lg:flex-row">
        <div className="item lg:w-1/2 min-h-screen max-h-screen">
          <Image className="object-cover" src={leftPic} alt=""/>
        </div>
        <div className="item lg:w-1/2 min-h-screen max-h-screen">
          <Image className="object-cover aspect-square" src={rightPic} alt="" />
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl text-neutral-50 font-black tracking-tight text-center -z-10 antialiased drop-shadow-2xl shadow-black">Quiet Kids Club</h1>
        </div>
      </div>
      <div className="flex flex-row w-auto min-h-screen">
          <Image className="object-cover" src={dualPic} alt=""/>
        </div>
    </div>
  );
}
