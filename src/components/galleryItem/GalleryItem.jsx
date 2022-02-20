import styles from "./galleryItem.module.css";

import React from "react";

export const GalleryItem = (props) => {
  return <div className={styles.galleryItem}>
    <div className={styles.headingContainer}>
      <p className={styles.heading}>{props.title}</p>
      <img src="" alt="" />
    </div>
  </div>;
};
