import React from "react";
import styles from "./contact.module.css";
import phonePath from "../../images/icons/phone.svg";
import emailPath from "../../images/icons/email.svg";
import instaPath from "../../images/icons/insta.svg";
import vkPath from "../../images/icons/vk.svg";
import youTubePath from "../../images/icons/youtube.svg";

export const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <h2 className={styles.title}>Напиши мне!</h2>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <img
                  className={styles.itemImage}
                  src={phonePath}
                  alt="телефон"
                />
                <p className={styles.itemText}>+7324145322</p>
              </div>
              <div className={styles.infoItem}>
                <img className={styles.itemImage} src={emailPath} alt="email" />
                <p className={styles.itemText}>kamil@asd.re</p>
              </div>
              <div className={styles.linkContainer}>
                <a
                  href="https://www.instagram.com/kamilazalieva/"
                  className={styles.link}
                  target="_blank"
                >
                  <img
                    className={styles.itemImage}
                    src={instaPath}
                    alt="insta"
                  />
                </a>
                <a
                  href="https://vk.com/idcamilelala"
                  target="_blank"
                  className={styles.link}
                >
                  <img className={styles.itemImage} src={vkPath} alt="vk" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCmEhKMMTZCTu_cmSS2gKK2Q"
                  className={styles.link}
                  target="_blank"
                >
                  <img
                    className={styles.itemImage}
                    src={youTubePath}
                    alt="youTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.form}></div>
        </div>
      </div>
    </section>
  );
};
