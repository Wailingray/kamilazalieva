import styles from "./gallery.module.css";

import photoPath from "../../images/kamila_on_stage.jpg";
import React from "react";
import { GalleryItem } from "../galleryItem/GalleryItem";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Gallery = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, width);

  return (
    <section className={styles.gallery}>
      <div className={styles.description}>
        <h1 className={styles.title}>Вдохновлять, любить и создавать новое</h1>
      </div>
      <div className={styles.section}>
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            className={styles.innerCarousel}
          >
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
          </motion.div>
        </motion.div>
        <div className={styles.commentContainer}>
          <h3 className={styles.commentTitle}>Концерты</h3>
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            sed similique eum ad veritatis consequatur aliquam nulla officiis
            accusamus, odit modi atque delectus maxime. Eum incidunt rerum
            dolorum voluptatibus culpa!
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.commentContainer}>
          <h3 className={styles.commentTitle}>Ученики</h3>
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            sed similique eum ad veritatis consequatur aliquam nulla officiis
            accusamus, odit modi atque delectus maxime. Eum incidunt rerum
            dolorum voluptatibus culpa!
          </p>
        </div>
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            className={styles.innerCarousel}
          >
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.section}>
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            className={styles.innerCarousel}
          >
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
            <GalleryItem src={photoPath} />
          </motion.div>
        </motion.div>
        <div className={styles.commentContainer}>
          <h3 className={styles.commentTitle}>Награды</h3>
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            sed similique eum ad veritatis consequatur aliquam nulla officiis
            accusamus, odit modi atque delectus maxime. Eum incidunt rerum
            dolorum voluptatibus culpa!
          </p>
        </div>
      </div>
    </section>
  );
};
