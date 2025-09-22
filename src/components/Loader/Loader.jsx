import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = ({ onLoadComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const texts = [
    "नमस्ते दिल्ली", // Hindi
    "Namaste Delhi", // English
  ];

  useEffect(() => {
    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    const timer1 = setTimeout(() => {
      setCurrentText(1); // Switch to English
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(false); // Start fade out
    }, 4500);

    const timer3 = setTimeout(() => {
      onLoadComplete(); // Complete loading
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.loaderContent}>
        {/* Text animation */}
        <motion.div 
          className={styles.textContainer}
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.loaderText}>
            {texts[currentText]}
          </h1>
        </motion.div>

        {/* Progress indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBarContainer}>
            <motion.div 
              className={styles.progressBar}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className={styles.progressText}>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
