import "./App.css";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";

function App() {
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
        <div className="flex items-center justify-center m-auto space-x-4">
          <motion.div
            className="aspect-square w-32 h-32 bg-slate-50 rounded-full shadow-2xl"
            animate={{ y: ["25%", "-25%"] }}
            transition={{ ease: "easeOut", duration: 0.8, yoyo: Infinity }}
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }}
            dragPropagation
            drag
          ></motion.div>
          <motion.div
            className="aspect-square w-16 h-16 bg-slate-50 rounded-full shadow-2xl"
            animate={{ y: ["25%", "-25%"] }}
            transition={{ ease: "easeOut", duration: 0.7, yoyo: Infinity }}
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }}
            dragPropagation
            drag
          ></motion.div>
          <motion.div
            className="aspect-square w-8 h-8 bg-slate-50 rounded-full shadow-2xl"
            animate={{ y: ["25%", "-25%"] }}
            transition={{ ease: "easeOut", duration: 0.6, yoyo: Infinity }}
            whileDrag={{ scale: 1.2 }}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }}
            dragPropagation
            drag
          ></motion.div>
        </div>
        <div className="absolute text-justify font-circular text-white top-0 left-0 p-10 hover:underline underline-offset-1">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/">
              <p className="text-3xl font-bold">AJL</p>
            </Link>
          </motion.div>
        </div>
        <div className="absolute text-justify font-circular text-slate-200 bottom-0 left-0 p-10">
          <AnimatedPage>
            <p className="text-5xl font-circular-black">Arthur Laroya</p>
            <p className="text-3xl">— design & code</p>
            <p className="font-light">
              full-stack web dev focused on <br />
              clean design and functionality
            </p>
          </AnimatedPage>
        </div>
      </div>

      <div className="relative col-span-2 h-screen flex bg-slate-50 text-gray-900 font-circular text-3xl">
      <AnimatePresence>
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
        
      </AnimatePresence>
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

export default App;
