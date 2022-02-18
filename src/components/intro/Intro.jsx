import React from "react";
import styles from "./intro.module.css";
import kamilaImagePath from "../../images/kamila_intro.png";


export const Intro = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.greetingsSection}>
          <div className={styles.greetingsWrapper}>
            <h2 className={styles.hello}>Привет! Меня зовут</h2>
            <h1 className={styles.name}>Камила Залиева</h1>
            <div className={styles.title}>
              <div className={styles.titleWrapper}>
                <div className={styles.titleItem}>Артистка</div>
                <div className={styles.titleItem}>Музыкант</div>
                <div className={styles.titleItem}>Педагог</div>
                <div className={styles.titleItem}>Сонграйтер</div>
                <div className={styles.titleItem}>Актриса</div>
              </div>
            </div>
            <p className={styles.description}>
              Я очень сильно люблю музыку, когда я пою на сцене все мои проблемы
              уходят на второй план и я не замечаю как проходит время. Я хочу
              передать это чувство как можно большему числу своих учеников
            </p>
          </div>
        </div>
        <div className={styles.photoSection}>
          <div className={styles.photoBackground}></div>
          <img
            src={kamilaImagePath}
            alt="Фото Камилы"
            className={styles.photo}
          />
        </div>
      </section>
    </>
  );
};
