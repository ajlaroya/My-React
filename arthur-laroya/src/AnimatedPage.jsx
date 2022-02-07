import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
