import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import deviceframes from "../images/deviceframes.png";
import deviceframes2 from "../images/deviceframes2.png";
import 'tw-elements';

export default function Project() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="relative col-span-3 h-screen flex bg-indigo-700">
        <div class="flex items-center justify-center m-auto space-x-4">

        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src={deviceframes} class="max-w-full block h-auto rounded-lg" alt="..."/>;
              <div class="carousel-caption hidden md:block absolute font-trap text-center">
                <h5 class="text-xl font-trap-black">Plume 🦜</h5>
                <p>A social media clone / online community space</p>
                <p>Powered by Django, Python, HTML/CSS, Bulma CSS, JavaScript, AWS</p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src={deviceframes2} class="max-w-full block h-auto rounded-lg" alt="..."/>;
              <div class="carousel-caption hidden md:block absolute font-trap text-center">
                <h5 class="text-xl font-trap-black">Sari-Sari ✨</h5>
                <p>My personal blog with my own content management system</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>

        <div class="absolute text-justify font-trap text-white top-0 left-0 p-10 hover:underline underline-offset-1">
          <Link to="/"><p class="text-3xl font-bold">AJL</p></Link>
        </div>

        <div class="absolute text-justify font-trap text-white bottom-0 left-0 p-10">
        <AnimatedPage>
          <p class="text-3xl font-trap-black">My projects</p>
          <p class="text-3xl"></p>
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
