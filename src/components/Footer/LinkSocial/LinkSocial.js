import React from "react";
import styles from "./LinkSocial.module.css";

const LinkSocial = ({ social }) => {
  const url = "";
  return (
    <a href={url} className={`${styles.socialItem} ${styles[social]}`}> </a>
  );
};

export default LinkSocial;
