import React from "react";
import styles from "./modal-overlay.module.css";


const ModalOverlay = ({ onClose }) => {
  const closeModalOnClick = () => {
    onClose();
  };
  return <div onClick={closeModalOnClick} className={styles.overlay}></div>;
};

export default ModalOverlay;
