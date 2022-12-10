import React from "react";
import styles from "./ImageWork.module.css";

const ImageWork = ({ imgSrc, imgAlt }) => {
  const url = "";
  return (
    <a href={url} className={`${styles.worksImage} ${styles.ibg}`}>
      <img src={imgSrc} alt={`Work ${imgAlt}`} />
    </a>
  );
};

export default ImageWork;
