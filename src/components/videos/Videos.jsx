import React from "react";
import styles from "./videos.module.css";
import YouTube from "react-youtube";

export const Videos = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className={styles.container}>
      <div class={styles.shapeTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class={styles.shapeBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h2 className={styles.title}>Мои выступления</h2>
      <div className={styles.section}>
        <div className={styles.video}>
          <YouTube videoId="EHI6YoEMu_I" opts={opts} />
        </div>
        <div className={styles.video}>
          <YouTube videoId="EHI6YoEMu_I" opts={opts} />
        </div>
        <div className={styles.video}>
          <YouTube videoId="EHI6YoEMu_I" opts={opts} />
        </div>
        <div className={styles.video}>
          <YouTube videoId="EHI6YoEMu_I" opts={opts} />
        </div>
      </div>
    </section>
  );
};
