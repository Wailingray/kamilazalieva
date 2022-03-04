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
    </section>
  );
};
