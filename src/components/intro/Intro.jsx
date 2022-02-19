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
          <svg
            width="100"
            height="100"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className={styles.scrollButton}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
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
