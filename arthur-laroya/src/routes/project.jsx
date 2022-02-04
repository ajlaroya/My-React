import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeather,
  faStar,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Project() {

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

      {/* Content div */}
      <div className="relative col-span-3 h-screen flex bg-gray-900">
        <div className="absolute text-justify font-circular text-white top-0 right-0 p-10 hover:underline underline-offset-1">
          
          {/* Circles */}
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <div className="flex items-center justify-center m-auto space-x-2">
              <motion.div
                className="aspect-square w-8 h-8 bg-slate-50 rounded-full shadow-2xl"
                animate={{ y: ["25%", "-25%"] }}
                transition={{ ease: "easeOut", duration: 0.8, yoyo: Infinity }}
              ></motion.div>
              <motion.div
                className="aspect-square w-16 h-16 bg-slate-50 rounded-full shadow-2xl"
                animate={{ y: ["25%", "-25%"] }}
                transition={{ ease: "easeOut", duration: 0.7, yoyo: Infinity }}
              ></motion.div>
              <motion.div
                className="aspect-square w-8 h-8 bg-slate-50 rounded-full shadow-2xl"
                animate={{ y: ["25%", "-25%"] }}
                transition={{ ease: "easeOut", duration: 0.6, yoyo: Infinity }}
              ></motion.div>
            </div>
          </motion.div>

        </div>

        <div className="absolute text-justify font-circular text-white top-0 left-0 p-10 hover:underline underline-offset-1">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/">
              <p className="text-3xl font-bold">AJL</p>
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute font-circular text-white bottom-0 left-0 p-10">
          <AnimatedPage>
            <p className="text-4xl font-circular-black">My projects</p>
            <br />
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl space-x-2">
              <FontAwesomeIcon icon={faFeather} size="s" />
              <a className="hover:underline underline-offset-2" href="https://plume.ap-southeast-2.elasticbeanstalk.com/">
                Plume
              </a>
            </motion.p>
            <ul>
              <li className="italic">social media clone / online multi-community space</li>
              <li>Frontend: HTML5/CSS, Bulma CSS, Anime.js</li>
              <li>Backend: Django, Python, JavaScript, AWS</li>
              <br />
            </ul>
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl space-x-2">
              <FontAwesomeIcon icon={faStar} size="s" />
              <a className="hover:underline underline-offset-2" href="https://mysarisari.herokuapp.com/">
                Sari-Sari
              </a>
            </motion.p>
            <ul>
              <li className="italic">personal blog on development & creativity </li>
              <li>Frontend: HTML5/CSS, Bootstrap 5, Bulma CSS</li>
              <li>Backend: Django, Python, JavaScript, Heroku</li>
              <br />
            </ul>
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-2xl space-x-2">
              <FontAwesomeIcon icon={faPortrait} size="s" />
              <a className="hover:underline underline-offset-2" href="https://arthurlaroya.com">AJL</a>
            </motion.p>
            <ul>
            <li className="italic">personal portfolio, you're on it right now!</li>
              <li>
                Frontend: JSX/HTML5/CSS, Tailwind CSS 3.0, React, Framer Motion
              </li>
              <li>Backend: Google Cloud</li>
              <br />
            </ul>
          </AnimatedPage>
        </div>
      </div>

      {/* Menu div */}
      <div className="relative col-span-2 h-screen flex bg-slate-50 text-gray-900 font-circular text-3xl">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="flex justify-center m-auto space-x-2"
        >
          <motion.div
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }}
            dragPropagation
            drag
            className="aspect-square w-12 h-12 bg-gray-900 rounded-full shadow-2xl hover:animate-pulse"
          ></motion.div>
          <motion.div
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 150, bounceDamping: 1.5 }}
            dragPropagation
            drag
            className="aspect-square w-24 h-24 bg-gray-900 rounded-full shadow-2xl hover:animate-pulse"
          ></motion.div>
          <motion.div
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 200, bounceDamping: 2 }}
            dragPropagation
            drag
            className="aspect-square w-48 h-48 bg-gray-900 rounded-full shadow-2xl hover:animate-pulse"
          ></motion.div>
        </motion.div>
        <div className="absolute inline-block left-0 top-0 p-10 hover:underline underline-offset-1">
          <Link to="/about">
            <motion.p
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="text-3xl font-bold"
              onClick={scrollToTop}
            >
              A
            </motion.p>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 p-10 underline hover:underline underline-offset-1">
          <Link to="/project">
            <motion.p
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="text-3xl font-bold"
              onClick={scrollToTop}
            >
              P
            </motion.p>
          </Link>
        </div>

        <div className="absolute bottom-0 right-0 p-10 hover:underline underline-offset-1">
          <Link to="/contact">
            <motion.p
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="text-3xl font-bold"
              onClick={scrollToTop}
            >
              C
            </motion.p>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
