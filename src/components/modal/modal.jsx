import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import closePath from "../../images/icons/close.svg";

const Modal = ({ children, onClose }) => {
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
      <div className={styles.modal}>
        <button onClick={onClose} className={`${styles.button} mr-10 mt-15`}>
          <img className={styles.close} src={closePath} alt="X" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
