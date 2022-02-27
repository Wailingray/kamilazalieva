import styles from "./galleryItem.module.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../modal/modal";
import eyePath from "../../images/icons/eye.svg";

export const GalleryItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <motion.div className={styles.galleryItem}>
        <div onClick={() => setIsShown(true)} className={styles.iconContainer}>
          <img
            className={styles.icon}
            draggable={false}
            src={eyePath}
            alt="фото"
          />
        </div>
        <img
          className={styles.photo}
          draggable={false}
          src={props.src}
          alt="фото"
        />
      </motion.div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isShown && (
          <Modal onClose={() => setIsShown(false)}>
            <img src={props.src} alt="" />
          </Modal>
        )}{" "}
      </AnimatePresence>
    </>
  );
};
