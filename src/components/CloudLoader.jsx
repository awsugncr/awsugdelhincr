import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import cloudImg from "../assets/cloudpng1.png";

const CloudLoader = ({ setLoaded }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setLoaded(true); // Notify parent that loading is complete
          }, 1000);
          return 100;
        }
        return prev + 5; // Fast counter effect
      });
    }, 180);

    return () => clearInterval(interval);
  }, [setLoaded]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[var(--color-dark-charcoal)] z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 10 } }}
        >
          <motion.div
            className="absolute text-[var(--color-accent-blue)] text-5xl font-bold z-05 font-montserrat"
            animate={{ opacity: [0, 1, 1, 0], y: [-10, 0, 0, -10] }}
            transition={{ duration: 11 }}
          >
            <h1>{count}% </h1>
          </motion.div>

          {/* Cloud Left (Centered & Bigger) */}
          <motion.img
            src={cloudImg}
            alt="Cloud 1"
            className="absolute w-[20%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "150vw", // Disperse to the right
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 2"
            className="absolute w-[30%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "-150vw", // Disperse to the left
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 3"
            className="absolute w-[15%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "150vw", // Disperse to the right
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 4"
            className="absolute w-[25%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "-150vw", // Disperse to the left
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 5"
            className="absolute w-[20%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "150vw", // Disperse to the right
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 6"
            className="absolute w-[30%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "-150vw", // Disperse to the left
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 7"
            className="absolute w-[15%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "150vw", // Disperse to the right
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 8"
            className="absolute w-[25%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "-150vw", // Disperse to the left
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 9"
            className="absolute w-[20%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "150vw", // Disperse to the right
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={cloudImg}
            alt="Cloud 10"
            className="absolute w-[30%] z-10"
            initial={{
              x: `${Math.random() * 100 - 50}vw`, // Random x position between -50vw and 50vw
              y: `${Math.random() * 100 - 50}vh`, // Random y position between -50vh and 50vh
              opacity: 1,
            }}
            animate={{
              x: "-150vw", // Disperse to the left
              y: `${Math.random() * 50 - 25}vh`, // Random y position while moving
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
CloudLoader.propTypes = {
  setLoaded: PropTypes.func.isRequired,
};

export default CloudLoader;
