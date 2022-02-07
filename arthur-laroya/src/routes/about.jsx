import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { motion } from "framer-motion";

export default function About() {
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
        <div className="absolute text-justify font-circular text-white top-0 left-0 p-10 hover:underline underline-offset-1">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/">
              <p className="text-3xl font-bold">AJL</p>
            </Link>
          </motion.div>
        </div>
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
        <div className="absolute font-circular text-white bottom-0 left-0 p-10">
          <AnimatedPage>
            <p className="text-4xl font-circular-black">
              Yo! I am Arthur Laroya,
            </p>
            <p className="text-2xl">I'm a Melbourne IT graduate from RMIT</p>
            <p className="font-light">
              Aspiring web dev 🙌 Front/back-end wizz 🧙
              <br /> Unconventional / clean designer 🎨 Aspiring web dev 🕸️
              <br /> Independent learner 🎓 Amateur guitarist 🎸 Dog patter 🐶
              <br /> Boston Celtics fan ☘️ Master of Googling 👀
            </p>

            <br />
            {/* Mobile */}
            <div className="text-4xl tracking-widest font-circular text-center text-white lg:hidden">
              <p className=" text-2xl tracking-normal">skills</p>
              <i className="devicon-amazonwebservices-original"></i>
              <i className="devicon-atom-original"></i>
              <i className="devicon-bash-plain"></i>
              <i className="devicon-behance-plain"></i>
              <i className="devicon-bootstrap-plain"></i>
              <br />
              <i className="devicon-bulma-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-django-plain"></i>
              <i className="devicon-figma-plain"></i>
              <i className="devicon-git-plain"></i>
              <br />
              <i className="devicon-github-plain"></i>
              <i className="devicon-google-plain"></i>
              <i className="devicon-googlecloud-plain"></i>
              <i className="devicon-heroku-plain"></i>
              <i className="devicon-html5-plain"></i>
              <br />
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-java-plain"></i>
              <i className="devicon-jquery-plain"></i>
              <i className="devicon-jupyter-plain"></i>
              <i className="devicon-linkedin-plain"></i>
              <br />
              <i className="devicon-mysql-plain"></i>
              <i className="devicon-nginx-plain"></i>
              <i className="devicon-npm-original-wordmark"></i>
              <i className="devicon-php-plain"></i>
              <i className="devicon-putty-plain"></i>
              <br />
              <i className="devicon-react-plain"></i>
              <i className="devicon-ssh-plain"></i>
              <i className="devicon-swift-plain"></i>
              <i className="devicon-tailwindcss-plain"></i>
              <i className="devicon-ubuntu-plain"></i>
              <br />
              <i className="devicon-unix-original"></i>
              <i className="devicon-vscode-plain"></i>
              <i className="devicon-windows8-plain"></i>
              <i className="devicon-numpy-plain"></i>
              <i className="devicon-python-plain"></i>
            </div>
          </AnimatedPage>
        </div>

        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="text-3xl tracking-widest font-circular text-white md:absolute bottom-0 right-0 p-10 invisible lg:visible"
        >
          <p className=" text-2xl tracking-normal"></p>
          <i className="devicon-amazonwebservices-original"></i>
          <i className="devicon-atom-original"></i>
          <i className="devicon-bash-plain"></i>
          <i className="devicon-behance-plain"></i>
          <i className="devicon-bootstrap-plain"></i>
          <br />
          <i className="devicon-bulma-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-django-plain"></i>
          <i className="devicon-figma-plain"></i>
          <i className="devicon-git-plain"></i>
          <br />
          <i className="devicon-github-plain"></i>
          <i className="devicon-google-plain"></i>
          <i className="devicon-googlecloud-plain"></i>
          <i className="devicon-heroku-plain"></i>
          <i className="devicon-html5-plain"></i>
          <br />
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-java-plain"></i>
          <i className="devicon-jquery-plain"></i>
          <i className="devicon-jupyter-plain"></i>
          <i className="devicon-linkedin-plain"></i>
          <br />
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-nginx-plain"></i>
          <i className="devicon-npm-original-wordmark"></i>
          <i className="devicon-php-plain"></i>
          <i className="devicon-putty-plain"></i>
          <br />
          <i className="devicon-react-plain"></i>
          <i className="devicon-ssh-plain"></i>
          <i className="devicon-swift-plain"></i>
          <i className="devicon-tailwindcss-plain"></i>
          <i className="devicon-ubuntu-plain"></i>
          <br />
          <i className="devicon-unix-original"></i>
          <i className="devicon-vscode-plain"></i>
          <i className="devicon-windows8-plain"></i>
          <i className="devicon-numpy-plain"></i>
          <i className="devicon-python-plain"></i>
        </motion.div>
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
        <div className="absolute inline-block left-0 top-0 p-10 underline hover:underline underline-offset-1">
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
