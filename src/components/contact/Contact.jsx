import React, { useRef, useState } from "react";
import styles from "./contact.module.css";
import phonePath from "../../images/icons/phone.svg";
import emailPath from "../../images/icons/email.svg";
import instaPath from "../../images/icons/insta.svg";
import vkPath from "../../images/icons/vk.svg";
import youTubePath from "../../images/icons/youtube.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3nt3bch",
        "template_ofq5kjb",
        formRef.current,
        "YmeBBGEbfJ2GLH6tc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <h2 className={styles.title}>Напиши мне!</h2>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <img className={styles.itemImage} src={phonePath} alt="телефон" />
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
                <img className={styles.itemImage} src={instaPath} alt="insta" />
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
        <div className={styles.formContainer}>
          <div className={styles.description}>
            <p className={styles.heading}>
              <span className={styles.accent}>Расскажите о себе! </span>Я всегда
              готова ответить на ваше письмо и обсудить возможности общения и
              сотрудничества
            </p>
          </div>
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={styles.input}
              type="text"
              placeholder="Имя"
              name="name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Ваш вопрос"
              name="subject"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              name=""
              placeholder="Сообщение"
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            <button>Отправить!</button>
            {done && 'Done!'}
          </form>
        </div>
      </div>
    </section>
  );
};
