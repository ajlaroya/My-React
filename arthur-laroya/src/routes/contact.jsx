import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div className="relative col-span-3 h-screen flex bg-gray-900">
        <div className="absolute text-justify font-circular text-white top-0 right-0 p-10 hover:underline underline-offset-1">
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
        <div className="absolute text-justify font-circular text-white bottom-0 left-0 p-10">
          <AnimatedPage>
            <p className="text-4xl font-circular-black">Say hello👋</p>
            <br />
            <p className="text-2xl font-bold">Find me on:</p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faEnvelope} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="mailto:arthur.j.laroya@gmail.com"
                >
                  arthur.j.laroya@gmail.com
                </a>
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faStarOfLife} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="https://mysarisari.herokuapp.com/"
                >
                  Sari-Sari (blog)
                </a>
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faLinkedin} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/arthurlaroya/"
                >
                  LinkedIn
                </a>
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faGithub} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="https://github.com/ajlaroya"
                >
                  GitHub
                </a>
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faBehanceSquare} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="https://www.behance.net/ajlaroya"
                >
                  Behance
                </a>
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <p className="text-xl lg:text-2xl">
                <FontAwesomeIcon icon={faTwitter} size="s" />{" "}
                <a
                  className="hover:underline"
                  href="https://twitter.com/arthurlaroya"
                >
                  Twitter
                </a>
              </p>
            </motion.div>
          </AnimatedPage>
        </div>
      </div>

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
        <div className="absolute bottom-0 left-0 p-10 hover:underline underline-offset-1">
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

        <div className="absolute bottom-0 right-0 p-10 underline hover:underline underline-offset-1">
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
