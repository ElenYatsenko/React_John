import React from "react";
import styles from "./MainTitlePage.module.css";
import "../../index.css";

const MainTitlePage = ({ titlePage, titlePagePart, indent }) => {
  return (
    <h1
      className={`${styles.helloTitle} ${
        indent ? styles.indent : ""
      } ${"title"}`}
    >
      {titlePage}
      <br />
      {titlePagePart}
    </h1>
  );
};

export default MainTitlePage;
