import React from "react";
import styles from "./about.module.css";
import photoPath from "../../images/kamila_on_stage.jpg";
import restaurantPath from "../../images/russian_wine_bar.png";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.cardContainer}>
        <div className={styles.background}></div>
        <div className={styles.card}>
          <img src={photoPath} alt="О Камиле" className={styles.photo} />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.title}>Обо мне</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
          repellat laudantium fugiat vel temporibus obcaecati minima ducimus
          facere nam architecto reprehenderit asperiores corrupti, placeat
          delectus tenetur doloremque consequatur illo consectetur.
        </p>
        <div className={styles.label}>
          <img
            className={styles.labelImage}
            src={restaurantPath}
            alt="Russian Wine Bar"
          />
          <div className={styles.labelInfo}>
            <h3 className={styles.labelTitle}>Russian Wine Bar</h3>
            <p className={styles.labelDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut hic ex fugit similique officia quia magni
            </p>
          </div>
        </div>
        <div className={styles.label}>
          <img
            className={styles.labelImage}
            src={restaurantPath}
            alt="Russian Wine Bar"
          />
          <div className={styles.labelInfo}>
            <h3 className={styles.labelTitle}>Russian Wine Bar</h3>
            <p className={styles.labelDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut hic ex fugit similique officia quia magni
            </p>
          </div>
        </div>
        <div className={styles.label}>
          <img
            className={styles.labelImage}
            src={restaurantPath}
            alt="Russian Wine Bar"
          />
          <div className={styles.labelInfo}>
            <h3 className={styles.labelTitle}>Russian Wine Bar</h3>
            <p className={styles.labelDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut hic ex fugit similique officia quia magni
            </p>
          </div>
        </div>
      </div>
      <div className={styles.shapeBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
