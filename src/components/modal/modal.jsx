import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import closePath from "../../images/icons/close.svg";
import { motion } from "framer-motion";

const Modal = ({ children, onClose }) => {
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeModalOnEsc);

    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.modal}
      >
        <button onClick={onClose} className={`${styles.button} mr-10 mt-15`}>
          <img className={styles.close} src={closePath} alt="X" />
        </button>
        {children}
      </motion.div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
