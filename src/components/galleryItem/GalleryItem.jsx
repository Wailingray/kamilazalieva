import styles from "./galleryItem.module.css";
import React from "react";
import { motion } from "framer-motion";

export const GalleryItem = (props) => {
  return (
    <motion.div className={styles.galleryItem}>
      <img
        className={styles.photo}
        draggable={false}
        src={props.src}
        alt="фото"
      />
    </motion.div>
  );
};
