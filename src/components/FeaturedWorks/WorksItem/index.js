import React from "react";
import ImageWork from "../ImageWork/index.js";
import styles from "./WorksItem.module.css";
import "../../../index.css";

const WorksItem = ({
  imgSrc,
  imgAlt,
  worksTitle,
  worksYear,
  worksCategory,
  worksText,
}) => {
  const url = `works/:details/${imgAlt}`;
  return (
    <article className={styles.worksItem}>
      <ImageWork imgSrc={imgSrc} imgAlt={imgAlt} />
      <div className={styles.worksBody}>
        <a href={url} className={styles.worksTitle}>
          {worksTitle}
        </a>
        <div className={styles.worksInfo}>
          <div className={styles.worksYear}>{worksYear}</div>
          <div className={styles.worksCategory}>{worksCategory}</div>
        </div>
        <div className={`${styles.worksText} ${"text"}`}>{worksText}</div>
      </div>
    </article>
  );
};

export default WorksItem;
