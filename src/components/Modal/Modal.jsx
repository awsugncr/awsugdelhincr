import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styles from './Modal.module.css';
import awsLogo from '../../assets/UGLogo.png';

const Modal = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <FiX />
            </button>

            <div className={styles.modalContent}>
              <div className={styles.imageContainer}>
                <img 
                  src={awsLogo} 
                  alt="AWS User Group Delhi NCR Logo" 
                  className={styles.logo}
                />
              </div>

              <div className={styles.textContent}>
                <h2 className={styles.title}>
                  AWS Community Day
                </h2>
                <h3 className={styles.subtitle}>
                  Delhi NCR 2025
                </h3>
                
                <div className={styles.comingSoon}>
                  <span className={styles.comingSoonText}>Coming Soon</span>
                  <div className={styles.comingSoonSubtext}>
                    Stay tuned for an amazing community experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
