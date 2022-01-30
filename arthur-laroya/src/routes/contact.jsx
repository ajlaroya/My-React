import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="relative col-span-3 h-screen flex bg-gray-900">
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
        <div class="absolute text-justify font-circular text-white top-0 left-0 p-10 hover:underline underline-offset-1">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/"><p class="text-3xl font-bold">AJL</p></Link>
        </motion.div>
        </div>
        <div class="absolute text-justify font-circular text-white bottom-0 left-0 p-10">
        <AnimatedPage>
          <p class="text-4xl font-circular-black">Keep contact! 👽</p>
          <br/>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p class="text-2xl"><FontAwesomeIcon icon={faEnvelope} size="s" /> <a class="hover:underline" href="mailto:arthur.j.laroya@gmail.com">arthur.j.laroya@gmail.com</a></p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p class="text-2xl"><FontAwesomeIcon icon={faRss} size="s" /> <a class="hover:underline" href="https://mysarisari.herokuapp.com/">Sari-Sari (blog)</a></p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p class="text-2xl"><FontAwesomeIcon icon={faLinkedin} size="s" /> <a class="hover:underline" href="https://www.linkedin.com/in/arthurlaroya/">LinkedIn</a></p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p class="text-2xl"><FontAwesomeIcon icon={faGithub} size="s" /> <a class="hover:underline" href="https://github.com/ajlaroya">GitHub</a></p>
          </motion.div>
          </AnimatedPage>
        </div>
      </div>

      <div class="relative col-span-2 h-screen flex bg-slate-50 text-gray-900 font-circular text-3xl">
        <div class="flex justify-center m-auto space-x-2">
          <div class="aspect-square w-12 h-12 bg-gray-900 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-24 h-24 bg-gray-900 rounded-full hover:animate-pulse"></div>
          <div class="aspect-square w-48 h-48 bg-gray-900 rounded-full hover:animate-pulse"></div>
        </div>
        <div class="absolute left-0 top-0 p-10 hover:underline underline-offset-1">
          <Link to="/about">A</Link>
        </div>
        <div class="absolute bottom-0 left-0 p-10 hover:underline underline-offset-1">
          <Link to="/project">P</Link>
        </div>
        <div class="absolute bottom-0 right-0 p-10 underline hover:underline underline-offset-1">
          <Link to="/contact">C</Link>
        </div>
      </div>
    </div>
  );
}
