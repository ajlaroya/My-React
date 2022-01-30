import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="relative col-span-3 h-screen flex bg-gray-900">
      
        <div class="absolute text-justify font-circular text-white top-0 left-0 p-10 hover:underline underline-offset-1">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/"><p class="text-3xl font-bold">AJL</p></Link>
        </motion.div>
        </div>
        <div class="absolute text-justify font-circular text-white top-0 right-0 p-10 hover:underline underline-offset-1">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <div class="flex items-center justify-center m-auto space-x-2"> 
          <motion.div class="aspect-square w-8 h-8 bg-slate-50 rounded-full shadow-2xl"
          animate={{ y: ["25%", "-25%"] }}
          transition={{ ease: "easeOut", duration: 0.8, yoyo: Infinity, }}></motion.div>
          <motion.div class="aspect-square w-16 h-16 bg-slate-50 rounded-full shadow-2xl"
          animate={{ y: ["25%", "-25%"] }}
          transition={{ ease: "easeOut", duration: 0.7, yoyo: Infinity, }}></motion.div>
          <motion.div class="aspect-square w-8 h-8 bg-slate-50 rounded-full shadow-2xl"
          animate={{ y: ["25%", "-25%"] }}
          transition={{ ease: "easeOut", duration: 0.6, yoyo: Infinity, }}></motion.div>
        </div>
        </motion.div>
        </div>
        <div class="absolute text-justify font-circular text-white bottom-0 left-0 p-10">
          <AnimatedPage>
            <p class="text-4xl font-circular-black">Hi! I am Arthur Laroya,</p>
            <p class="text-3xl">Melbournian IT grad from RMIT</p>
            <p class="font-light">Seeking a career in web development 👀 Front/back-end wizz 🧙 <br /> Fanatic of clean design 🎨 Aspiring web dev 🕸️<br/> Enthusiastic learner 🎓 Amateur guitarist 🎸 Patter of dogs 🐶</p>
              <br/>
            <p>Skills & Knowledge:</p>

            <div class="text-3xl tracking-widest">
              <i class="devicon-amazonwebservices-original"></i>
              <i class="devicon-atom-original"></i>
              <i class="devicon-bash-plain"></i>
              <i class="devicon-behance-plain"></i>
              <i class="devicon-bootstrap-plain"></i>
              <br/>
              <i class="devicon-bulma-plain"></i>
              <i class="devicon-css3-plain"></i>
              <i class="devicon-django-plain"></i>
              <i class="devicon-figma-plain"></i>
              <i class="devicon-git-plain"></i>
              <br/>
              <i class="devicon-github-plain"></i>
              <i class="devicon-google-plain"></i>
              <i class="devicon-googlecloud-plain"></i>
              <i class="devicon-heroku-plain"></i>
              <i class="devicon-html5-plain"></i>
              <br/>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-java-plain"></i>
              <i class="devicon-jquery-plain"></i>
              <i class="devicon-jupyter-plain"></i>
              <i class="devicon-linkedin-plain"></i>
              <br/>
              <i class="devicon-mysql-plain"></i>
              <i class="devicon-nginx-plain"></i>
              <i class="devicon-npm-original-wordmark"></i>
              <i class="devicon-php-plain"></i>
              <i class="devicon-putty-plain"></i>
              <br />
              <i class="devicon-react-plain"></i>
              <i class="devicon-ssh-plain"></i>
              <i class="devicon-swift-plain"></i>
              <i class="devicon-tailwindcss-plain"></i>
              <i class="devicon-ubuntu-plain"></i>
              <br />
              <i class="devicon-unix-original"></i>
              <i class="devicon-vscode-plain"></i>
              <i class="devicon-windows8-plain"></i>
              <i class="devicon-numpy-plain"></i>
              <i class="devicon-python-plain"></i>
            </div>
            
          </AnimatedPage>
        </div>
      </div>

      <div class="relative col-span-2 h-screen flex bg-slate-50 text-gray-900 font-circular text-3xl">
        <div class="flex justify-center m-auto space-x-2">
          <div class="aspect-square w-12 h-12 bg-gray-900 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-24 h-24 bg-gray-900 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-48 h-48 bg-gray-900 rounded-full hover:animate-pulse"></div>
        </div>
        <div class="absolute left-0 top-0 p-10 underline hover:underline underline-offset-1">
          <Link to="/about">A</Link>
        </div>
        <div class="absolute bottom-0 left-0 p-10 hover:underline underline-offset-1">
          <Link to="/project">P</Link>
        </div>
        <div class="absolute bottom-0 right-0 p-10 hover:underline underline-offset-1">
          <Link to="/contact">C</Link>
        </div>
      </div>
    </div>
  );
}
