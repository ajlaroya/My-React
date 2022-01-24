import './App.css';
import { Link, useLocation } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";

function App() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="relative col-span-3 h-screen flex bg-emerald-600">
        <div class="flex items-center justify-center m-auto space-x-4">
        <motion.div
  animate={{ x: 100, y: 100, opacity: 1 }}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 2 },
  }}
>
          <div class="aspect-square w-48 h-48 bg-white rounded-full animate-bounce shadow-2xl"></div>

          <div class="aspect-square w-24 h-24 bg-slate-50 rounded-full animate-bounce shadow-2xl"></div>
          <div class="aspect-square w-12 h-12 bg-slate-100 rounded-full animate-bounce shadow-2xl"></div>
                    </motion.div>
        </div>
        <div class="absolute text-justify font-trap text-white top-0 left-0 p-10 hover:underline underline-offset-1">
        <motion.div
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
  >
          <Link to="/"><p class="text-3xl font-bold">AJL</p></Link>
          </motion.div>
        </div>
          <div class="absolute text-justify font-trap text-white bottom-0 left-0 p-10">
          <AnimatedPage>
            <p class="text-4xl font-trap-black">Arthur Laroya</p>
            <p class="text-3xl">— design & code</p>
            <p class="font-light">full-stack web dev focused on <br/>
            modular design and functionality</p>
          </AnimatedPage>
          </div>
      </div>

      <div class="relative col-span-2 h-screen flex bg-emerald-100 text-emerald-600 font-trap text-3xl">
        <div class="flex justify-center m-auto space-x-2">
          <div class="aspect-square w-12 h-12 bg-emerald-600 rounded-full shadow-2xl hover:animate-pulse"></div>
          <div class="aspect-square w-24 h-24 bg-emerald-600 rounded-full shadow-2xl hover:animate-pulse"></div>
          <div class="aspect-square w-48 h-48 bg-emerald-600 rounded-full shadow-2xl hover:animate-pulse"></div>
        </div>
        <div class="absolute left-0 top-0 p-10 hover:underline underline-offset-1">
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

export default App;
