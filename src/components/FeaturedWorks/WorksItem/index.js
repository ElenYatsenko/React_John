import React from "react";
import ImageWork from "../ImageWork/index.js";
import styles from "./WorksItem.module.css";
import "../../../index.css";
import { Link } from "react-router-dom";

const WorksItem = ({
  imgSrc,
  imgAlt,
  worksTitle,
  worksYear,
  worksCategory,
  worksText,
}) => {
  return (
    <article className={styles.worksItem}>
      <ImageWork imgSrc={imgSrc} imgAlt={imgAlt} />
      <div className={styles.worksBody}>
        <Link to={`details`} className={styles.worksTitle}>
          {worksTitle}
        </Link>
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
