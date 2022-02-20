import styles from "./gallery.module.css";

import React from "react";
import { GalleryItem } from "../galleryItem/GalleryItem";

export const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.description}>
        <h1 className={styles.title}>Вдохновлять, любить и создавать новое</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          corporis quod officiis, minus natus maiores necessitatibus maxime
          optio numquam animi
        </p>
      </div>
      <div className={styles.list}>
        <GalleryItem title={'ученики'} />
        <GalleryItem title={'концерты'}/>
        <GalleryItem title={'ученики'}/>
        <GalleryItem title={'ученики'}/>
        <GalleryItem title={'ученики'}/>
        <GalleryItem title={'ученики'}/>
        <GalleryItem title={'ученики'}/>
      </div>
    </section>
  );
};
