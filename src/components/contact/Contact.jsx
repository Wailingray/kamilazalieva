import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import phonePath from "../../images/icons/phone.svg";
import emailPath from "../../images/icons/email.svg";
import instaPath from "../../images/icons/insta.svg";
import donePath from "../../images/icons/done.svg";
import errorPath from "../../images/icons/error.svg";
import vkPath from "../../images/icons/vk.svg";
import facebookPath from "../../images/icons/facebook.svg";
import youTubePath from "../../images/icons/youtube.svg";
import emailjs from "@emailjs/browser";
import { emailSchema, fieldSchema, validateInput } from "../../utils/utils";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

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
          setError(true);
          console.log(error.text);
        }
      )
      .finally(window.focus());
  };

  const changeNameField = (e) => {
    setName(e.target.value);
    validateInput(fieldSchema, setNameError, name);
  };

  const changeSubjectField = (e) => {
    setSubject(e.target.value);
    validateInput(fieldSchema, setSubjectError, subject);
  };

  const changeEmailField = (e) => {
    setEmail(e.target.value);
    validateInput(emailSchema, setEmailError, email);
  };

  const changeMessageField = (e) => {
    setMessage(e.target.value);
    validateInput(fieldSchema, setMessageError, message);
  };

  const errorStyle = {
    border: "1px solid red",
    boxShadow: "0 0 10px 5px red",
  };

  const style = {
    color: "#000000",
    ":hover": {
      color: "#ffffff",
    },
  };

  const anyError = nameError || emailError || subjectError || messageError;
  const noValue = !name || !email || !message || !subject;

  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <div className={styles.contactsWrapper}>
          <div className={styles.contacts}>
            <h2 className={styles.title}>Напиши мне!</h2>
            <div className={styles.description}>
              <p className={styles.heading}>
                <span className={styles.accent}>Расскажите о себе! </span>Я
                всегда готова ответить на ваше письмо и обсудить возможности
                общения и сотрудничества.
              </p>
            </div>
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
                <a
                  href="https://www.facebook.com/profile.php?id=100017070975421"
                  className={styles.link}
                  target="_blank"
                >
                  <img
                    className={styles.itemImage}
                    src={facebookPath}
                    alt="youTube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              style={nameError ? errorStyle : null}
              className={styles.input}
              type="text"
              placeholder="Имя"
              name="name"
              value={name}
              onChange={(e) => changeNameField(e)}
            />
            <input
              style={subjectError ? errorStyle : null}
              className={styles.input}
              type="text"
              placeholder="Ваш вопрос"
              name="subject"
              value={subject}
              onChange={(e) => changeSubjectField(e)}
            />
            <input
              style={emailError ? errorStyle : null}
              className={styles.input}
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => changeEmailField(e)}
            />
            <textarea
              style={messageError ? errorStyle : null}
              className={styles.textarea}
              name=""
              placeholder="Сообщение"
              name="message"
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => changeMessageField(e)}
            ></textarea>
            <div className={styles.submitContainer}>
              <button
                disabled={done || anyError || noValue ? true : false}
                className={styles.button}
                style={
                  done || anyError || noValue
                    ? {
                        opacity: "0.2",
                      }
                    : null
                }
              >
                Отправить!
              </button>
              {done && (
                <img
                  className={styles.itemImage}
                  src={donePath}
                  alt="Готово!"
                ></img>
              )}
              {error && (
                <>
                  <img
                    className={styles.itemImage}
                    src={errorPath}
                    alt="Готово!"
                  ></img>
                  <p className={styles.comment}>
                    Что-то пошло не так, повторите отправку позже!
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
