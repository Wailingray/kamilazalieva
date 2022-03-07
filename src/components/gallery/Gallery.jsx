import styles from "./gallery.module.css";

import photo1 from "../../images/gallery/concerts/photo1.jpg";
import photo2 from "../../images/gallery/concerts/photo2.jpg";
import photo3 from "../../images/gallery/concerts/photo3.jpg";
import photo4 from "../../images/gallery/concerts/photo4.jpg";
import photo5 from "../../images/gallery/concerts/photo5.jpg";
import photo6 from "../../images/gallery/concerts/photo6.jpg";
import photo7 from "../../images/gallery/concerts/photo7.jpg";
import kamilaMobilePath from "../../images/kamila_intro_mobile.png";

import React, { useLayoutEffect } from "react";
import { GalleryItem } from "../galleryItem/GalleryItem";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useScreenOrientation from "react-hook-screen-orientation";

export const Gallery = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const images = [
    {
      src: photo1,
    },
    {
      src: photo2,
    },
    {
      src: photo3,
    },
    {
      src: photo4,
    },
    {
      src: photo5,
    },
    {
      src: photo6,
    },
    {
      src: photo7,
    },
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const constraints = {
    right: 0,
    left: -width,
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.description}>
        <h1 className={styles.title}>Вдохновлять, любить и творить</h1>
      </div>
      <div className={styles.section}>
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.div
            drag="x"
            dragConstraints={constraints}
            className={styles.innerCarousel}
          >
            {images.map((el, idx) => {
              return (
                <li key={idx} className={styles.list}>
                  <GalleryItem src={el.src} />
                </li>
              );
            })}
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
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            className={styles.innerCarousel}
          >
            {images.map((el, idx) => {
              return (
                <li key={idx} className={styles.list}>
                  <GalleryItem src={el.src} />
                </li>
              );
            })}
          </motion.div>
        </motion.div>
        <div className={styles.commentContainer}>
          <h3 className={styles.commentTitle}>Ученики</h3>
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            sed similique eum ad veritatis consequatur aliquam nulla officiis
            accusamus, odit modi atque delectus maxime. Eum incidunt rerum
            dolorum voluptatibus culpa!
          </p>
        </div>
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
            {images.map((el, idx) => {
              return (
                <li key={idx} className={styles.list}>
                  <GalleryItem src={el.src} />
                </li>
              );
            })}
          </motion.div>
        </motion.div>
        <div className={styles.commentContainer}>
          <h3 className={styles.commentTitle}>Творчество</h3>
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
