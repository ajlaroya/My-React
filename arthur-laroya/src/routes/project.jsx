import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

export default function Project() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="relative col-span-3 h-screen flex bg-indigo-700">
        <div class="flex items-center justify-center m-auto space-x-4">
          <div class="aspect-square w-48 h-48 bg-white rounded-full animate-bounce"></div>
          <div class="aspect-square w-24 h-24 bg-slate-50 rounded-full animate-bounce"></div>
          <div class="aspect-square w-12 h-12 bg-slate-100 rounded-full animate-bounce"></div>
        </div>
        <div class="absolute text-justify font-trap text-white top-0 left-0 p-10 hover:underline underline-offset-1">
          <Link to="/"><p class="text-3xl font-bold">AJL</p></Link>
        </div>

        <div class="absolute text-justify font-trap text-white bottom-0 left-0 p-10">
        <AnimatedPage>
          <p class="text-4xl font-trap-black">My projects</p>
          <p class="text-3xl"></p>
          <p class="italic font-light">Sari-Sari (personal blog) <br/>
          Plume (mock social media)</p>
          </AnimatedPage>
        </div>
      </div>

      <div class="relative col-span-2 h-screen flex bg-indigo-200 text-indigo-600 font-trap text-3xl">
        <div class="flex justify-center m-auto space-x-2">
          <div class="aspect-square w-12 h-12 bg-indigo-700 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-24 h-24 bg-indigo-700 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-48 h-48 bg-indigo-700 rounded-full hover:animate-pulse"></div>
        </div>
        <div class="absolute left-0 top-0 p-10 hover:underline underline-offset-1">
          <Link to="/about">A</Link>
        </div>
        <div class="absolute bottom-0 left-0 p-10 underline underline-offset-1 hover:underline underline-offset-1">
          <Link to="/project">P</Link>
        </div>
        <div class="absolute bottom-0 right-0 p-10 hover:underline underline-offset-1">
          <Link to="/contact">C</Link>
        </div>
      </div>
    </div>
  );
}
