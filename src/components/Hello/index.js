import React from "react";
import MainTitlePage from "../MainTitlePage/MainTitlePage.js";
import igmJohn from "../../img/John.png";
import styles from "./Hello.module.css";
import "../../index.css";

const Home = () => {
  const url = "";
  return (
    <section className={styles.hello}>
      <div className={`${styles.helloContainer} ${"container"}`}>
        <div className={styles.helloContent}>
          <MainTitlePage
            titlePage={"Hi, I am John,"}
            titlePagePart={"Creative Technologist"}
          />
          <div className={`${styles.helloText} ${"text"}`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <a href={url} className={`${styles.helloBtn} ${styles.btn}`}>
            Download Resume
          </a>
        </div>
        <picture>
          <source srcSet={igmJohn} type="image/png" />
          <img
            src={igmJohn}
            className={styles.helloAvatar}
            alt="download metamask"
          />
        </picture>
      </div>
    </section>
  );
};

export default Home;
